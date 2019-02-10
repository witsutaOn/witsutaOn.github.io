$(document).ready(function() {
   $.getJSON("data.json",function(data) {
       var detail_data = '';
       $.each(data,function(key,value) {
           detail_data +='<tr>';
           detail_data +='<td class="id-data">'+value.id+'</td>';
           detail_data +='<td class="name-data">'+value.nm+'</td>';
           detail_data +='<td class="city-data">'+value.cty+'</td>';
           detail_data +='<td class="house-data">'+value.hse+'</td>';
           detail_data +='<td class="years-data">'+value.yrs+'</td>';
           detail_data +='</tr>';
       });
       $('#table-data').append(detail_data);
   });

   $("#search-btn").click(function(){
       var value = $("#input-search").val().toLowerCase();
       $("#table-data tr").filter(function() {
           $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
       });

   });

    $('#input-search').keypress(function(e){
        if(e.which == 13){
            var value = $("#input-search").val().toLowerCase();
            $("#table-data tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        }
    });

    $("#advance-search").click(function(){
        $("#filter-search").slideToggle("speed");
    });





    $("#searchAdv-btn").click(function(){

        jQuery.expr[':'].icontains = function(a, i, m) {
            return jQuery(a).text().toLowerCase()
                .indexOf(m[3].toLowerCase()) >= 0;
        };


        $("#table-data td.id-data:contains('" + $('#input-id').val().toLowerCase() + "')").parent().show();
        $("#table-data td.id-data:not(:contains('" +  $('#input-id').val().toLowerCase() + "'))").parent().hide();

        if($("#table-data td.name-data:icontains('" + $('#input-name').val() + "')")===true) {
            $("#table-data td.name-data:icontains('" + $('#input-name').val() + "')").parent().show();
        }
        else{
            $("#table-data td.name-data:not(:icontains('" + $('#input-name').val() + "'))").parent().hide();
        }

        if($("#table-data td.house-data:icontains('" + $('#input-house').val() + "')")===true) {
            $("#table-data td.house-data:icontains('" + $('#input-house').val() + "')").parent().show();
        }
        else{
            $("#table-data td.house-data:not(:icontains('" + $('#input-house').val() + "'))").parent().hide();
        }

    });


});