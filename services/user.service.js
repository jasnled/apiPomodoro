


class UserService {
  create(body){

    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(body);
      },2000);

    });

  };

  find(){
    return [{message: 'hi'}];
  };
  findOne(id){
    return id;
  };
  update(id, body){
    return { id, ...body }
  };
  delete(id){
    return id;
  };


}

module.exports = UserService ;
