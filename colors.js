var Links = {
    setcolor:function(color){
    //  var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length){
    //       alist[i].style.color = color;
    //       i = i + 1;
    //       }
    //     }
        $('a').css('color',color)
     }
    }
  var Body = {           
    SetColor :  function(color){
      //document.querySelector('body').style.color = color;
      $('body').css('color',color)},           
      setBackground : function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('bacgroundColor',color);
      }        
    }
  function button(self){
    var target =  document.querySelector('body');
  if(self.value === 'night'){
    target.style.backgroundColor = 'black';
    Body.SetColor('white');
    self.value = 'day';
    Links.setcolor('violet');
  } else {
    target.style.backgroundColor = 'white';
    Body.SetColor('black');
    self.value = 'night';
    Links.setcolor('green');         
  }
    }