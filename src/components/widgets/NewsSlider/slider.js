import React, { Component } from 'react';
import { firebase, firebaseArticles, firebaseLooper } from '../../../firebase';

import SliderTemplates from './slider_templates';


class NewsSlider extends Component {

    state = {
        news:[]
    }

    componentWillMount(){
        firebaseArticles.limitToFirst(this.props.amount).once('value')
        .then((snapshot)=>{
            const news = firebaseLooper(snapshot);
            

            // news.forEach((item, i)=>{
            //     firebase.storage().ref('images')
            //     .child(item.image).getDownloadURL()
            //     .then( url=>{
            //         news[i].image = url;
            //         //Avoid setting state multiple times in a row
            //         this.setState({
            //             news
            //         })
            //     })
            // });

            //Another way to do the above

            const asyncFunction = (item,i,callback) =>{
                firebase.storage().ref('images')
                    .child(item.image).getDownloadURL()
                    .then( url=>{
                        news[i].image = url;
                        callback();
                    })
            }

            //let request = []
            let request = news.map((item, i) =>{
                return new Promise((resolved)=>{
                    asyncFunction(item,i,resolved)
                })
            })

            Promise.all(request).then(() =>{
                this.setState({
                    news
                })
            })

        })

        // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        // .then( response => {
        //     this.setState({
        //         news:response.data
        //     })
        // })
    }

    render(){
        return(
            <div>
                <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
            </div>
        )
    }
}

export default NewsSlider;