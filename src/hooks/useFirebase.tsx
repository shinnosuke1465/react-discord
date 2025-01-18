import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { QueryDocumentSnapshot } from "firebase/firestore/lite";
import {
  onSnapshot,
  collection,
  DocumentData,
  CollectionReference,
} from "firebase/firestore";

interface Channels {
  id: string;
  channel: QueryDocumentSnapshot<DocumentData>;
}

const useFirebase = (data: string) => { //data: string...引数を受け取れるようにする
  const [documents, setDocuments] = useState<Channels[]>([]);//<Channels[]>...Channelsの型を持った配列のみ変数に格納できる

  useEffect(() => {
    let collectionRef: CollectionReference<DocumentData> = collection(db, data);
    onSnapshot(collectionRef, (snapshot) => { //公式ドキュメントの雛形参照
      let results: Channels[] = []; //型付の配列作成
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, channel: doc.data() as any }); //doc.data()...チャンネルの名前
      });
      setDocuments(results);  //useStateによってdocuments変数の中に配列が入る
    });
  }, [data]);

  return { documents }; //documents配列を返す
};

export default useFirebase;
