jQuery('#frmSubmit').on('submit',function(e){
    e.preventDefault();
    jQuery('#msg').html('Please wait...');
    jQuery('#btnSubmit').attr('disabled',true);
    jQuery.ajax({
        url:'https://script.google.com/macros/s/AKfycbxaCzCww53WhHKQukLz6pvnZMTn0TK3P59_wF8XpsAwXmVURoatq5A7wcjc0AUG7mM/exec',
        type:'post',
        data:jQuery('#frmSubmit').serialize(),
        success:function(result){
            jQuery('#frmSubmit')[0].reset();
            jQuery('#msg').html('Thank You');
            jQuery('#btnSubmit').attr('disabled',false);
            //window.location.href='';
        }
    });
  });