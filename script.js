const buttonsMain = ['bmain1', 'bmain2', 'bmain3', 'bmain4', 'bmain5', 'bmain6'];
function pMain(mainPage, sidebarPage, activeId) {
    const mainFrame = document.getElementById('main-frame');
    const sidebarFrame = document.getElementById('sidebar-frame');
    const sidebarContainer = document.querySelector('.sidebar-container');
    console.log('pMain called with:', { mainPage, sidebarPage, activeId });
    console.log('Elements:', { mainFrame, sidebarFrame, sidebarContainer });
    if (!mainFrame || !sidebarFrame) {
        console.error('Missing critical elements:', { mainFrame, sidebarFrame });
        return;}
    if (!sidebarContainer) {
        console.warn('Sidebar container not found; sidebar toggling disabled');}
        mainFrame.src = '';
        sidebarFrame.src = '';
        mainFrame.src = mainPage;
        sidebarFrame.src = sidebarPage;
    buttonsMain.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.disabled = false;
        } else {
            console.warn(`Button with ID ${id} not found`);}});
    const activeBtn = document.getElementById(activeId);
    if (activeBtn) {
        activeBtn.disabled = true;
    } else {
        console.warn(`Active button with ID ${activeId} not found`);}
    if (activeId === 'bmain6') {
        sidebarContainer?.classList.add('sidebar-hidden');
        mainFrame.classList.add('main-full-width');
    } else {
        sidebarContainer?.classList.remove('sidebar-hidden');
        mainFrame.classList.remove('main-full-width');}}
    window.pMain = pMain;
    const firstBtnMain = document.getElementById('bmain1');
    if (firstBtnMain) {
        firstBtnMain.disabled = true;
    } else {
        console.warn('Initial button bmain1 not found');}

// games buttons
const bGames = ['bgames1','bgames2'];
    function pGames(gamesPage, activeId) {
        const gamesFrame = document.getElementById('games-frame');
    if (!gamesFrame) return;
        gamesFrame.src = gamesPage;
        bGames.forEach(id => {
        const btn = document.getElementById(id);
    if (btn) btn.disabled = false;});
        const activeBtn = document.getElementById(activeId);
    if (activeBtn) activeBtn.disabled = true;}
        window.pGames = pGames;
const firstBtnGames = document.getElementById('bgames1');
    if (firstBtnGames) firstBtnGames.disabled = true;

// artwork buttons
const buttonsArtwork = ['bartwork1','bartwork2'];
    function pArtwork(artworkPage, activeId) {
        const artworkFrame = document.getElementById('artwork-frame');
    if (!artworkFrame) return;
        artworkFrame.src = artworkPage;
        buttonsArtwork.forEach(id => {
            const btn = document.getElementById(id);
    if (btn) btn.disabled = false;});
        const activeBtn = document.getElementById(activeId);
    if (activeBtn) activeBtn.disabled = true;}
        window.pArtwork = pArtwork;
    const firstBtnArtwork = document.getElementById('bartwork1');
    if (firstBtnArtwork) firstBtnArtwork.disabled = true;

// audio buttons
const bAudio = ['baudio1','baudio2','baudio3','baudio4'];
    function pAudio(audioPage, activeId) {
        const audioFrame = document.getElementById('audio-frame');
    if (!audioFrame) return;
        audioFrame.src = audioPage;
        bAudio.forEach(id => {
            const btn = document.getElementById(id);
        if (btn) btn.disabled = false;});
        const activeBtn = document.getElementById(activeId);
        if (activeBtn) activeBtn.disabled = true;}
        window.pAudio = pAudio;
const firstBtnAudio = document.getElementById('baudio1');
    if (firstBtnAudio) firstBtnAudio.disabled = true;

// swtich image
const delay = 2000;
    let index = 0;
const images = document.querySelectorAll("img");
    setInterval(() => {
        images.forEach(img => {
            if (img.dataset.images) {
                const imgs = img.dataset.images.split(",");
                img.src = imgs[index % imgs.length];}});
        index++;}, delay);

// marquee
document.querySelectorAll('.marquee-text').forEach(el => {
    const text = el.dataset.text + " ⊛ ";
    el.textContent = text.repeat(30);
    const speed = 50;
    const textWidth = el.offsetWidth;
    const duration = textWidth / speed;
    el.style.animationDuration = duration + "s";});

// buttons bottom
document.querySelectorAll('.marquee-buttons').forEach(el => {
const inner = el.querySelector('.marquee-buttons-inner');
const buttonT = [
    {src: '', url: '', datatooltip: '//'},
    {src: 'others/csc_88x31.png', url: 'https://capstasher.neocities.org', datatooltip: 'capstasher.neocities.org'},
    {src: 'others/thefreesite.gif', url: 'https://www.thefreesite.com', datatooltip: 'thefreesite.com'},
    {src: 'others/hicolor0.gif', url: '', datatooltip: '?'},
    {src: 'others/anlucasbutton.gif', url: 'https://anlucas.neocities.org', datatooltip: 'anlucas.neocities.org'},
    {src: 'others/banner_geany.gif', url: 'https://geany.org', datatooltip: 'geany.org'},
    {src: 'others/scp.gif', url: 'https://scp-wiki.wikidot.com', datatooltip: '571'},
    {src: 'others/floppy.gif', url: 'https://88x31.nl/index.html', datatooltip: '88x31.nl'},
    {src: 'others/yumenikki3.gif', url: 'https://ynoproject.net/2kki', datatooltip: 'ynoproject.net/2kki'},
    {src: 'others/amapy.cc.gif', url: 'https://amapy.cc', datatooltip: 'amapy.cc'},
    {src: 'others/aaascreensavers_button.gif', url: 'https://www.aaascreensavers.com', datatooltip: 'aaascreensavers.com'},
    {src: 'others/dimden.gif', url: 'https://dimden.dev', datatooltip: 'dimden.dev'},
    {src: 'others/wasongo_button2.gif', url: 'https://wasongo.art/main?z=/welcome', datatooltip: 'wasongo.art'},
    {src: 'others/freakbutton2.gif', url: 'https://freakphone.net', datatooltip: 'freakphone.net'},
    {src: 'others/cidokunet2.gif', url: 'https://cidoku.net/en', datatooltip: 'cidoku.net'},
    {src: 'others/burning.gif', url: '', datatooltip: '?'},
    {src: 'others/Bedr00mZ_BUTT0N5-2023_Viktor_Tibay.gif', url: 'https://bedr00mz.neocities.org/h0me', datatooltip: 'bedr00mz.neocities.org'},
    {src: 'others/wi-fi3.png', url: 'https://wi-fi.neocities.org', datatooltip: 'wi-fi.neocities.org'},
    {src: 'others/sadgrlonline.gif', url: 'https://sadgrlonline.github.io/archived-sadgrl.online', datatooltip: 'archived-sadgrl.online'},
    {src: 'others/java-scripts.gif', url: 'https://www.java-scripts.net', datatooltip: 'java-scripts.net'},
    {src: 'others/ozwomp.png', url: 'https://ozwomp.online', datatooltip: 'ozwomp.online'},
    {src: 'others/hl.gif', url: '', datatooltip: '?'},
    {src: 'others/freebackgrounds.gif', url: 'https://www.free-backgrounds.com', datatooltip: 'free-backgrounds.com'},
    {src: 'others/mm4rk3t.gif', url: 'https://mm4rk3t.xyz', datatooltip: 'mm4rk3t.xyz'},
    {src: 'others/lunospace.gif', url: 'https://lostlove.neocities.org', datatooltip: 'lostlove.neocities.org'},
    {src: 'others/thenextpage.png', url: '', datatooltip: '?'},
    {src: 'others/freespeechforever.gif', url: 'https://web.archive.org/web/19961020032805/http://www.eff.org/blueribbon.html/', datatooltip: 'blueribbon.html'},
    {src: 'others/cabbagesorter2.gif', url: 'https://cabbagesorter.neocities.org', datatooltip: 'cabbagesorter.neocities.org'},
    {src: 'others/internet-archive.gif', url: 'https://archive.org/', datatooltip: 'archive.org'},
    {src: 'others/nalfaebutton.gif', url: 'https://nalfae.neocities.org', datatooltip: 'nalfae.neocities.org'},
    {src: 'others/monsieurdoll.png', url: 'https://monsieurdoll.neocities.org', datatooltip: 'monsieurdoll.neocities.org'},
    {src: 'others/321webmaster.gif', url: 'https://www.321webmaster.com', datatooltip: '321webmaster.com'},
    {src: 'others/steam.gif', url: 'https://store.steampowered.com', datatooltip: 'store.steampowered.com'},
    {src: 'others/spacebutton.gif', url: 'https://buildaspaceship.neocities.org/', datatooltip: 'buildaspaceship.neocities.org'},
    {src: 'others/corruobserver.gif', url: 'https://corru.observer', datatooltip: 'corru.observer'},
    {src: 'others/antinazi.gif', url: '', datatooltip: '?'},
    {src: 'others/pixelsea-badge.gif', url: 'https://pixelsea.neocities.org', datatooltip: 'pixelsea.neocities.org'},
    {src: 'others/yesterweb.png', url: 'https://yesterweb.org', datatooltip: 'yesterweb.org'},
    {src: 'others/vimms.png', url: 'https://vimm.net', datatooltip: 'vimm.net'},
    {src: 'others/jed2ba.gif', url: 'https://www.jedsoft.org/jed/index.html', datatooltip: 'jedsoft.org'},
    {src: 'others/animationcentral.gif', url: 'https://animation-central.com', datatooltip: 'animation-central.com'},
    {src: 'others/bookmark_this_page.gif', url: '', datatooltip: '?'},
    {src: 'others/LuvstarKeiButton.png', url: 'https://luvstarkei.com', datatooltip: 'luvstarkei.com'},
    {src: 'others/tm.gif', url: 'https://potentia.moe', datatooltip: 'potentia.moe'},
    {src: 'others/css.gif', url: '', datatooltip: '?'},
    {src: 'others/gwass.gif', url: 'https://wallpaperaccess.com/full/1536061.jpg', datatooltip: '1536061.jpg'},
    {src: 'others/myzips_anim.gif', url: 'https://www.myzips.com', datatooltip: 'myzips.com'},
    {src: 'others/button_re-nata.gif', url: 'https://re-nata.neocities.org', datatooltip: 're-nata.neocities.org'},
    {src: 'others/60meg4.gif', url: 'https://khanofmir.neocities.org', datatooltip: 'khanofmir.neocities.org'},
    {src: 'others/tooltip.png', url: '', datatooltip: '?'},
    {src: 'others/sfree2.gif', url: 'http://www.freeanimations.iwarp.com/index.html', datatooltip: 'freeanimations.iwarp.com'},
    {src: 'others/textures.gif', url: 'https://textures.neocities.org', datatooltip: 'textures.neocities.or'},
    {src: 'others/noclick.gif', url: 'http://www.hat.net/abs/noclick/index.html', datatooltip: 'hat.net'},
    {src: 'others/google.gif', url: 'https://www.google.com', datatooltip: 'google.com'},
    {src: 'others/ninacti0n.gif', url: 'https://ninacti0n.art/main_page', datatooltip: 'ninacti0n.art'},
    {src: 'others/upallnight.gif', url: 'https://blog.upallnight.wtf', datatooltip: 'upallnight.wtf'},
    {src: 'others/cyberverse.gif', url: 'https://cyberverse.neocities.org/home', datatooltip: 'cyberverse.neocities.org'},
    {src: 'others/kuroi.png', url: 'https://kuroi.neocities.org', datatooltip: 'kuroi.neocities.org'},
    {src: 'others/hellonest.png', url: 'https://pastelhello.com/hellonest', datatooltip: 'pastelhello.com/hellonest'},
    {src: 'others/cc0.png', url: '', datatooltip: '?'},
    {src: 'others/22yk01.gif', url: 'https://22yk01.neocities.org', datatooltip: '22yk01.neocities.org'},
    {src: 'others/eyeorb.gif', url: 'https://eyeorb.net/main.html', datatooltip: 'eyeorb.net'},
    {src: 'others/ytbutton.gif', url: '', datatooltip: '?'},
    {src: 'others/10-fm.gif', url: '', datatooltip: '?'},
    {src: 'others/magentahardcorebanner_alt.gif', url: 'https://magentahardcore.com', datatooltip: 'magentahardcore.com'},
    {src: 'others/datakrashbutton.png', url: 'https://datakra.sh', datatooltip: 'datakra.sh'},
    {src: 'others/shishka-on-neocities-1.gif', url: 'https://shishka.neocities.org', datatooltip: 'shishka.neocities.org'},
    {src: 'others/blink-0.gif', url: '', datatooltip: '?'},
    {src: 'others/the-largest-88x31-collection-2.png', url: 'https://capstasher.neocities.org/88x31collection-page1', datatooltip: 'capstasher.neocities.org/88x31collection-page1'},
    {src: 'others/ghostk.id.gif', url: 'https://ghostk.id', datatooltip: 'ghostk.id'},
    {src: 'others/newgrounds.gif', url: 'https://www.newgrounds.com', datatooltip: 'newgrounds.com'},
    {src: 'others/javascript.png', url: '', datatooltip: '?'},
    {src: 'others/clip8.gif', url: 'https://web.archive.org/web/20010301190638/http://www.1freestuff.com', datatooltip: '1freestuff.com'},
    {src: 'others/momg-badge.gif', url: 'https://momg.neocities.org', datatooltip: 'momg.neocities.org'},
    {src: 'others/tupachq1.gif', url: '', datatooltip: '?'},
    {src: 'others/STICKYHANDS-88x31-1.gif', url: 'https://meyyebs.neocities.org', datatooltip: 'meyyebs.neocities.org'},
    {src: 'others/velvetblue.png', url: 'https://velvetblue.neocities.org/index2', datatooltip: 'velvetblue.neocities.org'},
    {src: 'others/aseprite.gif', url: 'https://www.aseprite.org', datatooltip: 'aseprite.org'},
    {src: 'others/internetexplorer.gif', url: '', datatooltip: '?'},
    {src: 'others/blender.gif', url: 'https://www.blender.org', datatooltip: 'blender.org'},
    {src: 'others/smugb.gif', url: 'https://smugbear.neocities.org', datatooltip: 'smugbear.neocities.org'},
    {src: 'others/weirdwizard69.gif', url: 'https://weirdwizard69.neocities.org', datatooltip: 'weirdwizard69.neocities.org'},
    {src: 'others/freebsd.gif', url: 'https://www.freebsd.org', datatooltip: 'freebsd.org'},
    {src: 'others/cyberneticdreams.png', url: 'https://cyberneticdreams.neocities.org', datatooltip: 'cyberneticdreams.neocities.org'},
    {src: 'others/frutigeraeroarchive_button.png', url: 'https://frutigeraeroarchive.org', datatooltip: 'frutigeraeroarchive.org'},
    {src: 'others/danieleswebsite.jpg', url: 'https://daniele63.com', datatooltip: 'daniele63.com'},
    {src: 'others/icon12.gif', url: '', datatooltip: '?'},
    {src: 'others/wheresgeorge.gif', url: 'https://www.wheresgeorge.com', datatooltip: 'wheresgeorge.com'},
    {src: 'others/modarchive.gif', url: 'https://modarchive.org', datatooltip: 'modarchive.org'},
    {src: 'others/cy834r-plain.png', url: 'https://cy834r.neocities.org', datatooltip: 'cy834r.neocities.org'},
    {src: '', url: '', datatooltip: '//'},];
const repeatCount = 1;
    let buttonHtml = '';
    for (let i = 0; i < repeatCount; i++) {
        buttonT.forEach(button => {
            buttonHtml += `<button class="buttonimg" style="margin:0px" data-tooltip="${button.datatooltip}" onclick="if ('${button.url}') window.open('${button.url}', '_blank')" aria-label="${button.datatooltip}"><img src="${button.src}" alt="${button.datatooltip}" style="width:88px; height:31px"></button>`;});}
    inner.innerHTML = buttonHtml.repeat(1);
const singleSetWidth = inner.offsetWidth / 2;
const containerWidth = el.offsetWidth;
const translateDistance = singleSetWidth - containerWidth;
    el.style.setProperty('--container-width', `${containerWidth}px`);
    if (translateDistance <= 0) {
        console.warn("Container width is larger than content width; marquee may not function as expected.");
        return;}
const speed = 60;
const duration = translateDistance / speed;
    inner.style.animation = `marquee ${duration}s linear infinite`;
    let isForward = true;
    let iterationCount = 0;
const loopsBeforeReverse = 0;
    inner.addEventListener('animationiteration', () => {
        iterationCount++;
        if (iterationCount >= loopsBeforeReverse) {
            isForward = !isForward;
            inner.style.animation = isForward
                ? `marquee ${duration}s linear infinite`
                : `marquee-reverse ${duration}s linear infinite`;
            iterationCount = 0;}});
    inner.querySelectorAll('.buttonimg').forEach(button => {
        button.addEventListener('mouseenter', () => {
            inner.style.animationPlayState = 'paused';});
        button.addEventListener('mouseleave', () => {
            inner.style.animationPlayState = 'running';});});});

// character animation
document.querySelectorAll('button').forEach(btn => {
const processNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
const text = node.textContent;
const fragment = document.createDocumentFragment();
    text.split('').forEach(char => {
const span = document.createElement('span');
        span.className = 'span';
        span.textContent = char;
        fragment.appendChild(span);});
        node.replaceWith(fragment);
    } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('arrowU')||node.classList.contains('noSpin')) {
        Array.from(node.childNodes).forEach(processNode);}};
        Array.from(btn.childNodes).forEach(processNode);});

// tooltip
const tooltip = document.getElementById("tooltip");
document.querySelectorAll("[data-tooltip]").forEach(el => {
    el.addEventListener("mousemove", e => {
    tooltip.textContent = el.dataset.tooltip;
    tooltip.style.opacity = 1;
        let x = e.pageX + 10;
        let y = e.pageY + 10;
const tooltipWidth = tooltip.offsetWidth;
const tooltipHeight = tooltip.offsetHeight;
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
    if (x + tooltipWidth > pageWidth) {
        x = e.pageX - tooltipWidth - 10;}
    if (y + tooltipHeight > pageHeight) {
        y = e.pageY - tooltipHeight - 10;}
    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";});
        el.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;});});

// change background
var backgrounds = document.querySelectorAll('.bg');
    backgrounds.forEach((bg) => {
        bg.addEventListener('mouseover', changeBackground);});
    function changeBackground() {
        var imageURL = this.getAttribute('src');
        document.body.style.backgroundImage = 'url(' + imageURL + ')';}

// button maker
document.addEventListener("DOMContentLoaded", function() {
    var submit = document.getElementById('submit');
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var text = document.getElementById('text');
    var bgColor = document.getElementById('bg-color');
    var textColor = document.getElementById('text-color');
    var intoImage = document.getElementById('into-image');
input.addEventListener('input', function() {
    const maxWidth = 138;
    const maxHeight = 80;
    const maxRows = 3;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '14px Silkscreen, monospace';
    const lines = input.value.split('\n');
    const rowCount = lines.length;
    let exceedsWidth = false;
    for (const line of lines) {
        const textWidth = context.measureText(line).width;
        if (textWidth > maxWidth) {
            exceedsWidth = true;
        break;}}
const exceedsHeight = rowCount > maxRows || input.scrollHeight > maxHeight;
    if (exceedsWidth || exceedsHeight) {
        while ((exceedsWidth || rowCount > maxRows || input.scrollHeight > maxHeight) && input.value.length > 0) {
            input.value = input.value.slice(0, -1);
            const newLines = input.value.split('\n');
            const newRowCount = newLines.length;
            exceedsWidth = false;
            for (const line of newLines) {
                const textWidth = context.measureText(line).width;
            if (textWidth > maxWidth) {
                exceedsWidth = true;
            break;}}
            rowCount = newRowCount;}
        console.log(`Trimmed to: ${input.value.length} characters, ${rowCount} rows`);}});
    function showPreview() {
        text.innerText = input.value;
        output.style.backgroundColor = bgColor.value;
        output.style.color = textColor.value;
        var ele = document.getElementsByName('align');
        for (var i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                text.style.textAlign = ele[i].value;}}}
    setInterval(showPreview, 1000);
    document.getElementById('upload').addEventListener('change', readURL, true);
    function readURL() {
        var file = document.getElementById("upload").files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            document.getElementById('output').style.backgroundImage = "url(" + reader.result + ")";}
        if (file) {
            reader.readAsDataURL(file);}}
    function getBounds(node) {
        if (node.getBoundingClientRect) {
            var clientRect = node.getBoundingClientRect();
            var width = node.offsetWidth == null ? clientRect.width : node.offsetWidth;
            return {
                top: Math.floor(clientRect.top),
                bottom: Math.floor(clientRect.bottom || (clientRect.top + clientRect.height)),
                right: Math.floor(clientRect.left + width),
                left: Math.floor(clientRect.left),
                width: width,
                height: node.offsetHeight == null ? clientRect.height : node.offsetHeight};}
            return {};}
    function convert2image() {
        var myOutput = document.getElementById('output');
        var resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        domtoimage.toPng(myOutput, {
            height: 31,
            width: 88})
        .then(function(dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            resultsDiv.appendChild(img);})
        .catch(function(error) {
            console.error('oops, something went wrong!', error);});}
    intoImage.addEventListener("click", convert2image);});

// what else ?
var aboutBtn = document.getElementById('aboutBtn');
var aboutOutput = document.getElementById('aboutOutput');
var itemsArr = [
"let's say you don't have anything. now what ? let's say you have everything. now what ?",
"you have to understand your past to understand your future",
"don't be afraid",
"you remind of someone. start from scratch",
"and you did all of that for what ? money ? and now you have them. and ?",
"same planet",
"forever means for ever and ever, and ever and ever. stay away from it",
"when we are born we are all kids, then ███ everything that did or ███ happend ██████ made ███████ , you ███ to take a step back and ████ ██████", 
"a little bit of C, C++, GDScript, JavaScript, HTML, CSS, and now i go after Assembly",
"if (!gain) { loss = false; }",
"i love sushi"];
aboutBtn.addEventListener('click', displayItem);
function displayItem() {
    var rand = Math.floor(Math.random() * itemsArr.length);
    aboutOutput.innerText = itemsArr[rand];}