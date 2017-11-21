document.writeln("<link rel='stylesheet' href='https://unpkg.com/tippy.js@1.3.0/dist/tippy.css'>")
document.writeln("<script src='https://unpkg.com/tippy.js@1.3.0/dist/tippy.min.js'></script>")

// Insert tooltips
tippy(document.querySelector('.init_block_item#info .contact .desc_contact'),
    {
      position: 'left',
      animation: 'shift',
      theme: 'transparent',
      interactive: true
    }
)
