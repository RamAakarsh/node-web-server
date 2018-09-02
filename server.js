const express=require('express');
const hbs=require('hbs');
const port=process.env.PORT ||3000;    

var app = express();
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})
app.use(express.static(__dirname+'/public'));


app.set('view engine','hbs');
app.get('/help',(req,res)=>{
    // res.send({
    //     text:'Welcome AK !',
    //     name:'haha'
    // });

    res.render('help.hbs',{
        help:'Help Page',
        //year:new Date().getFullYear()
    });
});

app.listen(port,()=>{
    console.log(`server is up ${port}`);
});

