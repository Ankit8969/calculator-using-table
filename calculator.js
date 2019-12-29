
var z="";
for(i=0;i<16;i++)
{
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    var x=this.value;
    if(x=='=')
    {
      console.log(z);
      for(i=0;i<z.length;i++)
      {
        if(z[i]=='+' || z[i]=='-' || z[i]=='*' || z[i]=='/')
        {
          console.log(z[i]);
          var first=z.slice(0,i);
          var second=z.slice(i+1);
          output(first,second,z[i]);
        }
      }
    }
    else if(x=='Clear_all')
    {
      z="";
      document.querySelector('.ans').innerText=z;
    }
    else {
      z=z+x;
      document.querySelector('.ans').innerText=z;
    }
  });
}

function output(x,y,ope)
{
  var x1=Number(x);
  var y1=Number(y);
  if(ope=='+')
  {
    z=x1+y1;
    console.log(x1+y1);
    document.querySelector('.ans').innerText=z;
  }
  else if(ope=='-')
  {
    z=x1-y1;
    document.querySelector('.ans').innerText=z;
    console.log(x1-y1);
  }
  else if(ope=='*')
  {
    z=x1*y1;
    document.querySelector('.ans').innerText=z;
    console.log(x1*y1);
  }
  else {
    z=x1/y1;
    document.querySelector('.ans').innerText=z;
    console.log(x1/y1);
  }
}


// 123+456
// x=123
// y=456
// x+y
//x-y
