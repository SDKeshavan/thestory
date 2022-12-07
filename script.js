//Script by SDKeshavan

const body = document.getElementById("body");
const homepagecontent = document.getElementById("pagecontent");

const navmenu = document.getElementById("navmenu");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

const infoList = document.getElementById("infolist");
const infoButton = document.getElementById("infobutton");
const line = document.querySelector(".line");

const footer = document.getElementById("footer");

let width = screen.width;

function openmenu(){
    if(navmenu.style.height=="0px"){
        if(width<="400"){
            navmenu.style.height="150px";
            navmenu.style.borderTop="1px solid pink";
            bar1.style.transform="rotate(45deg) translateX(4px) translateY(0px)";
            bar2.style.display="none";
            bar3.style.transform="rotate(-45deg) translateX(4px) translateY(-1px)";
            homepagecontent.style.marginTop="150px";
            // line.style.bottom="-159px";
        }
        else{
            navmenu.style.height="calc(43px + 1vw)";
            navmenu.style.borderTop="1px solid pink";
            bar1.style.transform="rotate(45deg) translateX(4px) translateY(1px)";
            bar2.style.display="none";
            bar3.style.transform="rotate(-45deg) translateX(3px) translateY(-1px)";
            homepagecontent.style.marginTop="calc(44px + 1vw)";
            // line.style.bottom="calc(-52px - 1vw)";
        }
    }
    else{
        navmenu.style.height="0px";
        navmenu.style.borderTop="none";
        bar1.style.transform="rotate(0deg) translateX(0px) translateY(0px)";
        bar2.style.display="block";
        bar3.style.transform="rotate(0deg) translateX(0px) translateY(0px)";
        homepagecontent.style.marginTop="0px";
        // line.style.bottom="-9px";
    }
}

function openinfo(){
    if(infoList.style.height=="0px"){
        infoList.style.height="100vh";
        infoButton.innerHTML="&times;";
        infoButton.style.fontSize="18px";
        homepagecontent.style.display="none";
        footer.style.display="none";
    }
    else{
        infoList.style.height="0px";
        infoButton.innerHTML="i";
        infoButton.style.fontSize="14px";
        homepagecontent.style.display="block";
        footer.style.display="flex";
    }
}