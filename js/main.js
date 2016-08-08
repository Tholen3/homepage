function characterWindow() {
  var characterWindow = window.open("", "myWindow", "scrollbars=1 ,width=600,height=500");
  characterWindow.document.write("<link rel='stylesheet' href='stylesheets/styles.css'><body class='paper'><div class='windowBody'><h1>Character Biographies</h1></br><h2>Hadeon's Character Bio</h2><p class='emphasis'>My character name</p><p>Such and such backstory from this region with this history and this is what his objective is going forward. Blah blah blah.</p><h2>Tholen3's Character Bio</h2><p class='emphasis'>My character name</p><p>Such and such backstory from this region with this history and this is what his objective is going forward. Blah blah blah.</p></div></body>");
}

function loreBook() {
  var loreBook = window.open("", "loreBook", "scrollbars=1, width=600,height=500");
  loreBook.document.write("<link rel='stylesheet' href='stylesheets/styles.css'><body class='paper'><div class='windowBody'><h1>Lorebook</h1></br><h2>Race Overviews</h2><p class='emphasis'>Elysians</p><p><ul><li>Wield crystalline armor & weapons. When an Elysian dies, their soul is captured within their belongings and is returned to the capital to live eternally within the halls of the city with all generations past and future.</li><li>Magical specialties: Conjuring weapons, wards and enchanting items.</li><li>Their elite guard consist of Swordmages that are both skilled with bladed weapons and with the magical manipulation of electricity focused through their crystalline items.</li></ul><p class='emphasis'>The Pellantine Empire</p><p><ul><li>Made up of dozens of different kingdoms, the Pellantine Empire stretches all across the western lands. While The Empire itself is not directly involved with The Fourth Crusade, the religious arm of The Empire is. The Empires armies and navy thereby are not present in the region, but crusaders, knights, zealots and sellswords flood into Ajana for either the promise of fortune or for their own religious beliefs.</li><li>The Emperor has sent out a handful of his most trusted agents, the Red Cloaks, to oversee the region. There are less than twenty Red Cloaks in the world, but they're known to be some of the finest swordsmen alive, while also being trained in espionage and subterfuge.</li><li>Goldmane is the heart of The Fourth Crusade. Goldmane is a castle-town built upon the ruins of an ancient Ajuni city. It's the only real 'city' in Ajana and with The Fourth Crusade its streets have become filled to the brim with all sorts of travelers.</li><li>Slavery was recently abolished in The Empire, and as such the King of Goldmane has used this fact to recruit free Ajuni fighters to their cause.</li><li>The Pellantine people vary greatly in appearance, culture and belief. While the central kingdoms are more unified in their nationalism and Imperalism, the outlying kingdoms often share traits of their foreign neighbors.</li></ul></p><p class='emphasis'>Nexions</p><p><ul><li>Stealthy and dangerous, with a keen knowledge of the poisons which percolate the swamp they call home.</li><li>Nexions are born with eyes which glow a dull red or orange. When they are killed, they are resurrected with blue eyes (as all wights have). If a 'blue-eye' dies, they then turn to ash. Blue-eyes lose their ability to conjure magic, as their soul is fractured. In addition, blue-eyes are seen as second-class citizens due to the fact that they fell in battle and are now 'less of a Nexion' for it.</li><li>Nexions specialize in necromancy and assassination.</li><li>They are hated by spirits as their  race desecrate their bodies.</li><li>Their leaders are the first Nexions -- three ancient beings of immense power known by some as Lich Kings or Night Lords.</li></ul></p></div></body>");
}

//Hamburger Menu
$(document).ready(function($) {
  if ($(window).width() < 750) {
    $('.container-fluid').hide();
  } else {
    $('.mobile-nav').hide();
  }
  $('.menu-btn').click(function() {
    $('.responsive-menu').toggleClass('expand')
  });
});

//Screen resize testing
$(window).resize(function() {
  if ($(window).width() < 750) {
    $('.container-fluid').hide();
    $('.mobile-nav').show();
  } else {

    $('.mobile-nav').hide();
    $('.container-fluid').show();
  }
});
