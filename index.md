---
layout: default_home
title: Uracus Home Page
---
<!--home page-->
<a id="home" class="pagelink"></a>
<div class="row top-pad back-col home-div-pos backgrnd-img main-page" id="home-page" data-tag="hme">
    <header>
    <h3>Welcome to URACUS</h3>
    </header>
    <!--Popover for message sending-->
    <!--<div id="overlay">
        <div id="popup">
            <h4 id="sndg-msg-rchus">Sending Message<br/></h4>
            <img src="/data/img/ajax-loader.gif" id="loading-indicator-rchus" alt="ajax loader">
            <div id="reachus_message" class="notice" data-error="There was an error sending the message, please try again." data-success="Message successfully sent!"></div>
        </div>
    </div>
    <div class="col-sm-6" id="form-div">
        <form role="form" method="POST" id="form_send_data">
            <div class="form-group">
                <textarea rows="5" class="form-control" id="comment" name="comment" title="Enter the content" required></textarea>
                <span class="highlight"></span>
                <span class="hBar"></span>
                <label>Message</label>
            </div>
            <div class="form-group btn-div">
            <button id="btn-submit-top" type="submit" class="btn btn-submit" onclick="return false;">
                    <span id="Button-txt" title="Click to Submit">Submit</span>
                </button>
            </div>
        </form>
        </div>-->
    <div class="scrolle-arrow home-arrow">
        <a href="#about" class="anchorLink"><span class="glyphicon glyphicon-chevron-down font-col"></span></a>
    </div>
</div>


<!--about us-->
<div class="row back-col main-page mar-l-r-0" id="about-us-page" data-tag="abt">
<a id="about" class="pagelink"></a>
    <header>
        <h3>About us</h3>
    </header>
    <section id="team-img"></section>
    <!--<section class="disp-flex flex-center flex-wrap flex-column">
        <div class="container-fluid about-inside-cont">
        <div id="tj-img-cont" class="left-img" data-desc="our designer turned coder,<br/> his coding skills are as fast as his imagination..<br/>& belive me he's very good at it">
            <img id="tj-img" class="img-responsive disp-inline circ-box" src="/data/img/about_us/timanshu.png" alt="Timanshu" title="Timanshu" data-right="udb-img" data-left="tan-img" data-name="timanshu"/>
            </div>
            <div id="udb-img-cont" class="center-img" data-desc="our techno-geek,<br/> he is a man of few words.. <br/>little shy little humorous but true life saver when it comes to technology">
                <img id="udb-img" class="img-responsive disp-inline circ-box center-img-transform" src="/data/img/about_us/udbhav.png" alt="Udbhav" title="Udbhav" data-right="tan-img" data-left="tj-img" data-name="udbhav"/>
            </div>
            <div id="tan-img-cont" class="right-img" data-desc=" ">
                <img id="tan-img" class="img-responsive disp-inline circ-box" src="/data/img/about_us/tania.png" alt="Tania" title="Tania" data-right="tj-img" data-left="udb-img" data-name="tania"/>
            </div>
        </div>
        <div class="horizontal-scroll">
            <span class="glyphicon glyphicon-chevron-left srol-horizontal" onclick="changeImgLeft();"></span>
            <span id="personal-desc">"our techno-geek,<br> he is a man of few words..<br> little shy little humorous but true life saver when it comes to technology"</span>
            <span class="glyphicon glyphicon-chevron-right srol-horizontal" onclick="changeImgRight();"></span>
        </div>
    </section>-->
    <section class="flex-outside font-18">
        <div class="flex-inside">
            <div class="flex-ele mobile-width"  onmouseover="imgChangeColor(this)" onmouseout="imgChangeSketch(this)">
                <img class="img-responsive about-img pos-center" src="/data/img/about_us/timanshu.png" data-name="timanshu"/>
                <span class="abt-img-txt"><b>Timanshu</b><br/>our designer turned coder,<br/> his coding skills are as fast as his imagination..<br/>& belive me he's very good at it"</span>
            </div>
            <div class="flex-ele mobile-width"  onmouseover="imgChangeColor(this)" onmouseout="imgChangeSketch(this)">
                <img class="img-responsive about-img pos-center" src="/data/img/about_us/udbhav.png" data-name="udbhav"/>
                <span class="abt-img-txt"><b>Udbhav</b><br/>our techno-geek,<br> he is a man of few words..<br> little shy little humorous but true life saver when it comes to technology</span>
                </div>
            <div class="flex-ele mobile-width"  onmouseover="imgChangeColor(this)" onmouseout="imgChangeSketch(this)">
                <img class="img-responsive about-img pos-center" src="/data/img/about_us/tania.png" data-name="tania"/>
                <span class="abt-img-txt"><b>Tania</b><br/>Our Researcher cum Developer,<br/> whose passion is coding, studying and again coding...<br/> but belive it or not she could turn anything into codzzz...</span>
            </div>
        </div>
    </section>
    <div class="scrolle-arrow" id="scrl-arw-abt">
        <a href="#home" class="anchorLink"><span class="glyphicon glyphicon-chevron-up font-col"></span></a>
        <a href="#contact" class="anchorLink"><span class="glyphicon glyphicon-chevron-down font-col"></span></a>
    </div>
</div>


<!--contact us-->
<div class="container-fluid bakgrnd-con main-page" id="contact-page" data-tag="cntct">
<a id="contact" class="pagelink"></a>
    <!--Heading-->
    <header id="contact-header">
        <h3>Contact Us</h3><br/>
    </header>
    <!--contact us form-->
    <div class="row disp-flex flex-center">
        <div class="col-sm-6" id="form-div-cnt">
            <form role="form" method="POST" id="form_reach_us">
                <div class="form-group">
                    <input type="text" class="form-control" id="inputName" name="fullName" title="Enter Your Name" required/>
                    <span class="highlight"></span>
                    <span class="hBar"></span>
                    <label>Full Name</label>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail" name="email" title="Enter Your Email" required/>
                    <span class="highlight"></span>
                    <span class="hBar"></span>
                    <label>Email</label>
                </div>
                <div class="form-group">
                    <textarea rows="5" class="form-control" id="comment" name="message" title="Enter the content" required></textarea>
                    <span class="highlight"></span>
                    <span class="hBar"></span>
                    <label>Message</label>
                </div>
                <div class="form-group btn-div">
                    <button id="btn-submit-con" type="submit" class="btn btn-submit" onclick="return false;"><span id="Button-txt" title="Click to Submit">Submit</span></button>
                </div>
            </form>
        </div>
    </div>
    <div class="disp-flex flex-center">
        <span class="txt-center font-col"><span>We look forward to hearing from you</span><br/><span class="glyphicon glyphicon-envelope"></span> uracus.nlp@gmail.com</span>
    </div>
    <div class="scrolle-arrow">
    <a href="#about" class="anchorLink"><span class="glyphicon glyphicon-chevron-up font-col"></span></a>
    </div>
    <!--Footer-->
    <footer class="footer" id="footer-cont">
        <p class="txt-center" title="Copyright Uracus">
        © 2015 by Uracus
        </p>
    </footer>
</div>