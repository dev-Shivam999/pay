const data=new  Date()
       const min=data.getMinutes()
       const veri=min+50
       if(veri>60){
        const low=veri-60
        console.log(low);
       }
       else{
        console.log(veri);
       }