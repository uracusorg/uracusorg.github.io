---
layout: default_home
title: Uracus Home Page
---
<div class="row top-pad back-col home-div-pos backgrnd-img main-page" id="home-page">
    <header>
        <h3>Welcome to URACUS, a NLP processing software</h3>
    </header>
    <!--Popover for message sending-->
    <div id="overlay">
        <div id="popup">
            <h4 id="sndg-msg-rchus">Sending Message<br/></h4>
            <img src="/data/img/ajax-loader.GIF" id="loading-indicator-rchus" alt="ajax loader">
            <div id="reachus_message" class="notice" data-error="There was an error sending the message, please try again." data-success="Message successfully sent!"></div>
        </div>
    </div>
    <div class="col-sm-6" id="form-div">
        <form role="form" method="POST" id="form_reach_us">
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
</div>
