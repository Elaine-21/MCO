$(document).ready(function(){
    $("#Sort-by-rating").click(function(){
        
        var list = $("#condo-sorting");
        var listitems = list.children(".recommended-condo").get();
        listitems.sort(function(a,b){
            var compA = $(a).attr('id').toUpperCase();
            var compB = $(b).attr('id').toUpperCase();
            return (compA < compB) ? -1: (compA > compB) ? 1:0;
        });
        $.each(listitems, function(idx, itm){
            list.append(itm);
        })
    });

    $("#Sort-by-budget").click(function(){
       
        var list = $("#condo-sorting");
        var budget = list.find(".budget").get();
        budget.sort(function(a,b){
            var compA = $(a).attr('id').toUpperCase();
            var compB = $(b).attr('id').toUpperCase();
            return (compA < compB) ? -1: (compA > compB) ? 1:0;
        });
        $.each(budget, function(idx, itm){
            list.append($(itm).parents(".recommended-condo"));
        });
    });
    
});

