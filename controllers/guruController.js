exports.guruPage = (req,res)=>{
  const data = {
    title: "Data Guru"
  }
  res.render('data_guru',{
    guruData:data
  });
}


exports.guruAddPage = (req,res) =>{
  res.render('add_guru');
}