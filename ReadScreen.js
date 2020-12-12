import React from 'react';
import {Stylesheet, Text,View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class ReadScreen extends React.Component{
    constructor(){
        super()
        this.state={
            allStories:[]
        }
    }
    componentDidMount(){
            this.getStories()
    }
    getStories=()=>{
        try{
         var allStories=[]
         var stories= db.collection('newsstories').get()
         .then(snapshot=>{
             snapshot.forEach(doc=>{
                 allStories.push(doc.data())
                 console.log(allStories)
             })  
             this.setState=({
                 allStories:allStories
             })      
         })
        }
        catch{
         console.log(error)
        }
    }
    render(){
        return(
            <View>
                <FlatList 
                data={this.state.allStories}
                renderItem={({item})=>(
                    <View style={styles.itemCointainer}>
                        <Text>Title:{item.title}</Text>
                        <Text>Author:{item.author}</Text>
                        
                        </View>
                )}
                keyExtractor={(item,index)=>index.toString()}
                />
            </View>
        )
    }
}

const styles = Stylesheet.create({
   itemCointainer={
  heighy:80,
width:'100%',
borderWidth:2,
justifyContent:'center',
alignItems:'center'
   }
})