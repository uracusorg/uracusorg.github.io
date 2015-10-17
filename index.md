---
layout: default_home
title: Uracus Home Page
---
<!--home page-->
<a id="home" class="pagelink"></a>
<div class="row top-pad back-col home-div-pos backgrnd-img main-page" id="home-page">
    <header>
        <h3>Welcome to URACUS, <br> NLP processing software</h3>
    </header>
    <!--Popover for message sending-->
    <div id="overlay">
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
                <button id="btn-submit" type="submit" class="btn" onclick="return false;">
                    <span id="Button-txt" title="Click to Submit">Submit</span>
                </button>
            </div>
        </form>
    </div>
    <div class="scrolle-arrow">
        <a href="#about" class="anchorLink"><span class="glyphicon glyphicon-chevron-down font-col"></span></a>
    </div>
</div>


<!--about us-->
<div class="row back-col main-page mar-l-r-0" id="about-us-page">
<a id="about" class="pagelink"></a>
    <header>
        <h3>About us</h3>
    </header>
    <section id="team-img"></section>
    <section class="flex-outside font-18">
        <div class="flex-inside">
            <div class="flex-ele mobile-width"  onmouseover="imgChangeColor(this)" onmouseout="imgChangeSketch(this)">
                <img class="img-responsive about-img" src="/data/img/about_us/timanshu.png" data-name="timanshu"/>
                <span class="abt-img-txt"><b>Timanshu</b><br/>A funny and mad guy who's killer with codes</span>
            </div>
            <div class="flex-ele mobile-width"  onmouseover="imgChangeColor(this)" onmouseout="imgChangeSketch(this)">
                <img class="img-responsive about-img" src="/data/img/about_us/udbhav.png" data-name="udbhav"/>
                <span class="abt-img-txt"><b>Udbhav</b><br/>Our Techno-geek, his silence say it all</span>
                </div>
            <div class="flex-ele mobile-width"  onmouseover="imgChangeColor(this)" onmouseout="imgChangeSketch(this)">
                <img class="img-responsive about-img" src="/data/img/about_us/tania.png" data-name="tania"/>
                <span class="abt-img-txt"><b>Tania</b><br/>Doubt case</span>
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
                    <button id="btn-submit" type="submit" class="btn" onclick="return false;"><span id="Button-txt" title="Click to Submit">Submit</span></button>
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