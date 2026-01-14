const buttonsMain = 
[
    'Button_Main_0',
    'Button_Main_1',
    'Button_Main_2',
    'Button_Main_3',
    'Button_Main_4',
    'Button_Main_5'
];

function pMain(mainPage, activeId)
{
    const mainFrame = document.getElementById('main-frame');

    if (!mainFrame) { return; }

    mainFrame.src = mainPage;

    buttonsMain.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.disabled = false;
    });

    // Disable active button
    const activeBtn = document.getElementById(activeId);
    if (activeBtn) activeBtn.disabled = true;
}

window.addEventListener('DOMContentLoaded', () => {
    pMain('Home_Page.html', 'Button_Main_0');
});

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
    // add here
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