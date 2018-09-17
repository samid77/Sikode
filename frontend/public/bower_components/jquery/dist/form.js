$('.add_button').click(function(e)
{
    var kakoi = $(this).attr('fieldsnum');
    var insHTML = '<div class="input-group input-group-sm"><input type="text name="userfile[]" class="form-control"><span class="input-group-btn"><button fieldsnum="1" type="button" class="btn btn-danger btn-flat remove_button"><i class="fa fa-remove"></i></button></span></div>';
    $('#fields' + kakoi).append(insHTML);
});
$('.fields_wrap').on('click', '.remove_button', function(e){
    e.preventDefault();
    $(this).parents(':eq(1)').remove();
});

$('.add_button').click(function(e)
{
    var kakoi = $(this).attr('fldnum');
    var insHTML = '<div class="input-group input-group-sm"><input type="text name="userfile[]" class="form-control"><span class="input-group-btn"><button fldnum="1" type="button" class="btn btn-danger btn-flat remove_button"><i class="fa fa-remove"></i></button></span></div>';
    $('#fld' + kakoi).append(insHTML);
});
$('.fld_wrap').on('click', '.remove_button', function(e){
    e.preventDefault();
    $(this).parents(':eq(1)').remove();
});