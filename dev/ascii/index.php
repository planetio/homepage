<!DOCTYPE>

<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		
	<link rel="stylesheet" href="/ascii/_ui/css/main.css" type="text/css" media="screen" title="no title" charset="utf-8">
	
	
	<title></title>
</head>
<body>
  
  <h1>Ascii Box</h1>

  <?php 
  	$items = array(
  		
            array("celsius", "&#8451;"),
            array("fahrenheit", "&#8457;"),
            array("prescription", "&#8470;"),
            array("sun", "&#9728;"),
            array("cloudy", "&#9729;"),
            array("raining", "&#9730;"),

            array("snow man", "&#9731;"),
            array("comet", "&#9732;"),
            array("star solid", "&#9733;"),
            array("star outline", "&#9734;"),
            array("lightning", "&#9735;"),
            array("thunderstorm", "&#9736;"),
            array("circle dot", "&#9737;"),
            array("phone", "&#9742;"),
            array("phone outline", "&#9743;"),
            array("Checkbox", "&#9744;"),
            array("Checked checkbox", "&#9746;"),
            array("St. Andrew's Cross", "&#9747;"),
            array("left pointing index", "&#9754;"),
            array("right pointing index", "&#9755;"),
            array("left pointing index outline", "&#9756;"),
            array("right pointing index outline", "&#9758;"),
            array("upward pointing index", "&#9757;"),
            array("downward pointing index", "&#9759;"),
            array("skull and crossbones", "&#9760;"),
            array("radio active", "&#9762;"),

            array("biohazard sign", "&#9763;"),
            array("Caduceus", "&#9764;"),
            array("Ankh", "&#9765;"),
            array("Eastern Christian Cross", "&#9766;"),
            array("Chi Rho Cross", "&#9767;"),
            array("Patriarchal Cross", "&#9768;"),
            array("Greek Cross", "&#9769;"),
            array("Crescent Moon & Star", "&#9770;"),
            array("Farsi symbol", "&#9771;"),
            array("Adi Shakti", "&#9772;"),
            array("hammer & sickle", "&#9773;"),
            array("peace sign", "&#9774;"),
            array("trigram ying & yang", "&#9775;"),
            array("trigram Heaven", "&#9776;"),
            array("trigram Lake", "&#9777;"),
            array("trigram Fire", "&#9778;"),
            array("trigram Thunder", "&#9779;"),
            array("trigram Wind", "&#9780;"),
            array("trigram Water", "&#9781;"),
            array("trigram Mountain", "&#9782;"),
            array("trigram Heaven", "&#9783;"),
            array("Dharma Wheel", "&#9784;"),
            array("frowning face", "&#9785;"),
            array("smiley face", "&#9786;"),
            array("black smiley face", "&#9787;"),
            array("waxing crescent moon", "&#9789;"),
            array("waning crescent moon", "&#9790;"),
            array("Mercury", "&#9791;"),
            array("Venus - Female symbol", "&#9792;"),
            array("Earth symbol", "&#9793;"),
            array("Mars - Male symbol", "&#9794;"),
            array("Jupiter", "&#9795;"),
            array("Saturn", "&#9796;"),
            array("Uranus", "&#9797;"),
            array("Neptune", "&#9798;"),
            array("Pluto", "&#9799;"),
            array("White King", "&#9812;"),
            array("White Queen", "&#9813;"),
            array("White Rook", "&#9814;"),
            array("White Bishop", "&#9815;"),
            array("White Knight", "&#9816;"),
            array("White Pawn", "&#9817;"),
            array("Black King", "&#9818;"),
            array("Black Queen", "&#9819;"),
            array("Black Rook", "&#9820;"),
            array("Black Bishop", "&#9821;"),
            array("Black Knight", "&#9822;"),
            array("Black Pawn", "&#9823;"),
            array("black spade suit", "&#9824;"),
            array("red heart suit", "&#9825;"),
            array("red diamond suit", "&#9826;"),
            array("black club suit", "&#9827;"),
            array("red spade suit", "&#9828;"),
            array("black heart suit", "&#9829;"),
            array("black diamond suit", "&#9830;"),
            array("red club suit", "&#9831;"),
            array("hot springs", "&#9832;"),
            array("musical quarter note", "&#9833;"),
            array("musical eighth note", "&#9834;"),
            array("musical single bar note", "&#9835;"),
            array("musical double bar note", "&#9836;"),
            array("flat note", "&#9837;"),
            array("natural note", "&#9838;"),
            array("sharp note", "&#9839;"),
            array("cut above", "&#9985;"),
            array("cut here", "&#9986;"),
            array("cut below", "&#9987;"),
            array("scissors", "&#9988;"),
            array("public pay phone", "&#9990;"),
            array("film reel - tape spool", "&#9991;"),
            array("airport jet airplane", "&#9992;"),
            array("envelope mail email", "&#9993;"),
            array("victory sign", "&#9996;"),
            array("signature - sign here", "&#9997;"),
            array("pencil diagonal down", "&#9998;"),
            array("pencil", "&#9999;"),
            array("pencil diagonal up", "&#1000;"),
            array("check mark", "&#10003;"),
            array("heavy check mark", "&#10004;"),
            array("multiplication sign X", "✕"),
            array("heavy multiplication sign X", "&#10006;"),
            array("ballot X", "&#10007;"),
            array("heavy ballot X", "&#10008;"),
            array("Latin Roman Cross", "&#10013;"),
            array("Latin Cross 3D shadow", "&#10014;"),
            array("Latin Cross outline", "&#10015;"),
            array("Maltese Cross", "&#10016;"),
            array("Star of David", "&#10017;"),
            array("quotation mark single turned comma", "&#10075;"),
            array("quotation mark single comma", "&#10076;"),
            array("quotation mark double turned comma", "&#10077;"),
            array("quotation mark double comma", "&#10078;"),
            array("quotation mark", "&#34;"),
            array("ampersand", "&#38;"),
            array("non-breaking space", "&#160;"),
  	)
  ?>
    <ul id="icon-list">
    	<?php foreach($items as $item) {?>
    		<li data-value="<?php echo $item[1] ?>">
    			<div class="icon"><?php echo $item[1] ?></div>
    			<h3 class="name"><?php echo $item[0] ?></h3>
    		</li>
    	<?php } ?>
    </ul>
  
  
</body>
</html>
