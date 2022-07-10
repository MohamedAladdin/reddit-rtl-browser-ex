// "<all_urls>"
var __construct = () =>
{

    var content = document.querySelector('.uI_hDmU5GSiudtABRz_37');

    if (content) { // Checking for textBox

        content.style = 'background-color: red' ;

        var arabicLettersSearch = content.textContent.search(/['أ-ي']/g); // Checking for Arabic Content

        if (arabicLettersSearch >= 0) { 
            
            content.style = 'text-align: right' ;

        }

    }
}

setInterval(__construct, 100);