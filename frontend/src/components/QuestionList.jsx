import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

class QuestionList extends Component 
{
    state = 
    {
        questionList: [],
        resultTag: [],
    }

    componentWillMount()
    {
        axios.get('http://localhost:8003/allquestion')
        .then((ambilData) =>  {
                                // console.log(ambilData.data[0].questionList);    
                                // console.log(ambilData.data[1].resultTag);    
                                this.setState(
                                    {
                                        questionList: ambilData.data[0].questionList,
                                        resultTag: ambilData.data[1].resultTag
                                    });
                                })
    }

    render() 
    {
        const hasilquestion = this.state.questionList.map(
            (isi, urutan) => {
                var questionID = isi.id;
                var questionTitle = isi.question_title;
                var questionContent = isi.question_content;
                
                const questionTag = this.state.resultTag.map(
                    (isi, urutan) => 
                        {
                            var questionID2 = isi.question_id;
                            var tag = isi.tag

                            if(questionID2 == questionID)
                            {
                                return <small key={urutan} style={{marginRight: '5px'}} className="label pull-right bg-green">{tag}</small>
                            }
                        })

                return  <div>
                            <li key={urutan} value={questionID} style={{padding:'5px'}}>
                                <h4><b>{questionTitle}</b></h4>
                                <p>{questionContent}</p>
                                <Link to="/detail"><a>See details ...</a></Link>
                            </li>
                            <div>
                                {questionTag}
                                {/* <small className="label pull-right bg-green">Tag</small>
                                <small style={{marginRight: '5px'}} className="label pull-right bg-green">Tag</small>
                                <small style={{marginRight: '5px'}} className="label pull-right bg-green">Tag</small> */}
                            </div>
                            <hr />
                        </div>
            });

        return (
        <div>
          <Navbar />
          <div className="content-wrapper">
            <div className="container">
                <h3><b>Topic Headers</b></h3>
                <div className="row">
                    <div className="col-md-8">
                        <div className="box box-widget">
                            <div className="box-body">
                                <ul className="list-unstyled">

                                    {hasilquestion}
                                    {/* <li style={{padding:'5px'}}>
                                        <h4><b>Lorem ipsum dolor sit amet</b></h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorem distinctio! Dignissimos sint corporis quia hic temporibus! Mollitia aspernatur nostrum laudantium nihil odit at distinctio autem impedit, modi id harum.</p>
                                        <Link to="/detail"><a>See details ...</a></Link>
                                    </li>
                                    <div>
                                        <small class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                    </div>
                                    <hr /> */}
                                    
                                 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="box box-primary box-solid">
                            <div className="box-header with-border">
                                <h3 className="box-title"><b>Related Tags</b></h3>
                            </div>
                            <div className="box-body">
                                <ul className="list-unstyled">
                                    <li style={{padding:'5px'}}>Lorem ipsum dolor sit amet</li>
                                    <li style={{padding:'5px'}}>Consectetur adipiscing elit</li>
                                    <li style={{padding:'5px'}}>Integer molestie lorem at massa</li>
                                    <li style={{padding:'5px'}}>Facilisis in pretium nisl aliquet</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="box box-success box-solid">
                            <div className="box-header with-border">
                                <h3 className="box-title"><b>Featured Topics</b></h3>
                            </div>
                            <div className="box-body">
                                <ul className="list-unstyled">
                                    <li style={{padding:'5px'}}>Lorem ipsum dolor sit amet</li>
                                    <li style={{padding:'5px'}}>Consectetur adipiscing elit</li>
                                    <li style={{padding:'5px'}}>Integer molestie lorem at massa</li>
                                    <li style={{padding:'5px'}}>Facilisis in pretium nisl aliquet</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <Footer />
      </div>
    )
  }
}
export default QuestionList; 
