var Span = {
    setColor: function(color){
        $('span').css('color', color);    
    },setBackgroundColor: function(color){
        $('span').css('background-color', color);
    }
  }

function highlighterHandler(self){
    if(self.value == 'highlighter-ON'){
      Span.setBackgroundColor('yellow');
      Span.setColor('black');   
      self.value = 'highlighter-OFF';
    } else {
      Span.setBackgroundColor('white')
      Span.setColor('black');   
      self.value = 'highlighter-ON';  
    } 
  }