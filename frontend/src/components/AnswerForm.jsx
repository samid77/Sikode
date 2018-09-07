import React, { Component } from 'react'

export default class AnswerForm extends Component 
{
  render() 
  {
    return (
        <div>
            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">Answer Form</h3>
                </div>
                {/* /.box-header */}

                {/* form start */}
                <form role="form">
                    <div className="box-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile" />
                            <p className="help-block">Example block-level help text here.</p>
                        </div>
                        
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" /> Check me out
                            </label>
                        </div>
                    </div>
                    {/* /.box-body */}

                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
             </div>

        </div>
        )
  }
}
