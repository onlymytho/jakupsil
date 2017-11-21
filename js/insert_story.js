
// Create image blocks
var content_block = document.body.getElementsByClassName('content')[0]
var item_img_descs = [
    '2016.04.22 Liquor',
    '2016.12.11 Window, red light',
    '2016.12.11 Our members - Sanghyuk / Shin / Sol',
    '2016.12.18 Drying white walls',
    '2017.02.12 Food with wine',
    '2017.04.22 Areca palm',
    '2017.09.30 Propose in ',
    '2017.10.08 Mirror ball & Beam projector',
    '2017.11.12 Four shoes'
]
var img_count = 9
for (i=0; i<img_count; i++){
    var img_block = document.createElement('div') // Create img_block
    img_block.className = 'img_block'
    var img_wrapper = document.createElement('div') // Create img_wrapper in img_block
    img_wrapper.className = 'img_wrapper'
    var item_img = document.createElement('div') // Create item_img in img_wrapper
    item_img.className = 'item_img'
    var item_img_desc = document.createElement('div') // Create item_img_desc in img_wrapper
    item_img_desc.className = 'item_img_desc'
    var textnode = document.createTextNode(item_img_descs[i]);

    // Make block structure
    img_wrapper.appendChild(item_img)
    img_wrapper.appendChild(item_img_desc)
    img_block.appendChild(img_wrapper)
    content_block.appendChild(img_block)

    // Insert images and descs
    item_img.style.backgroundImage = 'url(./asset/story/'+(i+1)+'.jpg)'
    item_img_desc.appendChild(textnode);
}
