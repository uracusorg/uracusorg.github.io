function imgChangeColor(div){
    var img=div.children[0],
        link=$(img).prop("src"),
        name=$(img).data("name");
    link=link.replace(name,name+"-o");
    $(img).prop("src",link);
}
function imgChangeSketch(div){
    var img=div.children[0],
        link=$(img).prop("src"),
        name=$(img).data("name");
    link=link.replace(name+"-o",name);
    $(img).prop("src",link);
}

function changeImgLeft(){
    var img=$(".center-img"),//selects centered image
        child=img.children(),//selects image of centered element
        left=$(".left-img"),//selects left image div
        right=$(".right-img"),//selects right elements div
        right_child=right.children(),//selects right elements image
        right_data=right.data("desc"),//takes data from right element
        desc=$("#personal-desc"),//selects description element
        link=right_child.prop("src"),
        name=right_child.data("name"),
        link2=child.prop("src"),
        name2=child.data("name");
    img.removeClass("center-img");//remove centering class from currently centered imgae
    child.removeClass("center-img-transform");//remove the transformation from image
    img.addClass("left-img");//adds left class to it
    link2=link2.replace(name2+"-o",name2);
    child.prop("src",link2);
    left.removeClass("left-img");//remove left class from left image
    left.addClass("right-img");//add right class to left image
    right.removeClass("right-img");//remove left class from right image
    right.addClass("center-img");//add centering class to rightt image
    right_child.addClass("center-img-transform");//add centering transformation to right image
    link=link.replace(name,name+"-o");
    right_child.prop("src",link);
    desc.empty();//clears content
    desc.append(right_data);//change the description
}

function changeImgRight(){
    var img=$(".center-img"),//selects centered image
        child=img.children(),//selects image of centered element
        left=$(".left-img"),//selects left image div
        right=$(".right-img"),//selects left elements div
        left_child=left.children(),//selects left elements image
        left_data=left.data("desc"),//takes data from right element
        desc=$("#personal-desc"),//selects description element
        link=left_child.prop("src"),
        name=left_child.data("name"),
        link2=child.prop("src"),
        name2=child.data("name");
    img.removeClass("center-img");//remove centering class from currently centered imgae
    child.removeClass("center-img-transform");//remove the transformation from image
    img.addClass("right-img");//adds left class to it
    link2=link2.replace(name2+"-o",name2);
    child.prop("src",link2);
    left.removeClass("left-img");//remove left class from left image
    left.addClass("center-img");//add right class to left image
    left_child.addClass("center-img-transform");//add centering transformation to right image
    right.removeClass("right-img");//remove left class from right image
    right.addClass("left-img");//add centering class to right image
    link=link.replace(name,name+"-o");
    left_child.prop("src",link);
    desc.empty();//clears content
    desc.append(left_data);//change the description
}
