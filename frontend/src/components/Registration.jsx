            
            <section className="dashboard-header">
              <div className="container-fluid ">
                <div className="p-3 bg-white has-shadow">

                <form onSubmit={this.tambahData} encType="multipart/form-data">
            
                <legend>Tambah Kategori</legend>
                <hr/>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Kategori Makanan</label>
                    <div className="col-lg-12">
                        <input ref="catfoot" type="text" className="form-control" placeholder="Nama produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                        <Link to="#" type="button" onClick={() => this.value(this.refs)} className="btn btn-primary">
                          ADD
                        </Link>
                        {/* <button type="submit" onClick={() => this.value(this.ref="catfoot")} className="btn btn-primary">Submit</button> */}
                    </div>
                </div>
                  </form>
                </div>
              </div>
            </section>