import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  messages: any;
  messages1: any;
  messages2: any;
  private db: any;
  model: any = {};
  model1: any = {};
  model2: any = {};
  isEditing: boolean = false;

  constructor(public navCtrl: NavController) {
    this.db = firebase.firestore();
    this.loadData();
  }

  loadData(){
    this.getAllDocuments("messages").then((e)=>{
      this.messages = e;
  });
  this.getAllDocuments("messages1").then((e)=>{
    this.messages1 = e;
});
this.getAllDocuments("messages2").then((e)=>{
  this.messages2 = e;
});
  }

addMessage(){
    if(!this.isEditing){
    this.addDocument("messages", this.model).then(()=>{
      this.loadData();//refresh!
    });
  }else{
    this.updateDocument("messages", this.model.$key, this.model).then(()=>{
      this.loadData();//refresh!
    });
  }
  this.isEditing = false;
  //Borra de
  this.model.coment = '';

}

addMessage1(){
    if(!this.isEditing){
    this.addDocument("messages1", this.model1).then(()=>{
      this.loadData();//refresh!
    });
  }else{
    this.updateDocument("messages1", this.model1.$key, this.model1).then(()=>{
      this.loadData();//refresh!
    });
  }
  this.isEditing = false;
  //Borra de
  this.model1.coment1 = '';

}

addMessage2(){
    if(!this.isEditing){
    this.addDocument("messages2", this.model2).then(()=>{
      this.loadData();//refresh!
    });
  }else{
    this.updateDocument("messages2", this.model2.$key, this.model2).then(()=>{
      this.loadData();//refresh!
    });
  }
  this.isEditing = false;
  //Borra de
  this.model2.coment2 = '';

}





//CRUD operation methods------------------------------------------------------------------------------------------

getAllDocuments(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(collection)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id
                    console.log(obj)
                    arr.push(obj);
                });

                if (arr.length > 0) {
                    console.log("Data del documento. soy un logger, ignorenme:", arr);
                    resolve(arr);
                } else {
                    console.log("No hay tal documento!");
                    resolve(null);
                }

            })
            .catch((error: any) => {
                reject(error);
            });
    });
}

deleteDocument(collectionName: string, docID: string): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .delete()
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

addDocument(collectionName: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db.collection(collectionName).add(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

updateDocument(collectionName: string, docID: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .update(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

}
