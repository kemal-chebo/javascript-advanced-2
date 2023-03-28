let button = document.getElementById("btn");
        let textLoad = document.getElementById("tab");
        let loader = document.getElementById("load");
        button.addEventListener("click", function () {
            getData();
        });
        async function getData() {
            try {
                loader.style.display = "inline-block";
                let response = await fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt');
                if (response.status !== 200) {
                    throw new Error("Error while reading file.");
                }
                styleTable = ['text-align: left;', 'text-align: left;', 'text-align: left;', 'vertical-align: top; height: 50px;','text-align: left;', 'text-align: left;', 'text-align: left;', 'vertical-align: top; height: 50px;','text-align: left;', 'text-align: left;', 'text-align: left;', 'vertical-align: top; height: 50px;','text-align: left;', 'text-align: left;', 'text-align: left;', 'vertical-align: top; height: 50px;','text-align: left;', 'text-align: left;', 'text-align: left;', 'vertical-align: top; height: 50px;']
                let text = await response.text();
                text = await text.split('\n').map(row => row
                .split(' , ')
                .map((cell, i) => `<td style="${styleTable[i]}">${cell}</td>`)
                .join(''))
                .map((row,i) => `<tr style="${styleTable[i]}">${row}</tr>`)
                .join('');
                textLoad.innerHTML =
                "<table><tr><td>Name:</td></tr><tr><td>Address:<td></tr><tr><td>Phone:</td></tr><tr><td style='vertical-align: top; height: 50px; text-align: left;'>Course:</td></tr><tr><td>Name</td></tr><tr><td>Address<td></tr><tr><td>Phone</td></tr><tr><td style='vertical-align: top; height: 50px; text-align: left;'>Course</td></tr><tr><td>Name</td></tr><tr><td>Address<td></tr><tr><td>Phone</td></tr><tr><td style='vertical-align: top; height: 50px; text-align: left;'>Course</td></tr><tr><td>Name</td></tr><tr><td>Address<td></tr><tr><td>Phone</td></tr><tr><td style='vertical-align: top; height: 50px; text-align: left;'>Course</td></tr><tr><td>Name</td></tr><tr><td>Address<td></tr><tr><td>Phone</td></tr><tr><td style='vertical-align: top; height: 50px; text-align: left;'>Course</td></tr></table>"
                    +"<table>" +text + "<table>";
                } catch (err) {
                    textLoad.innerHTML = 'Fetch problem: ' + err.message;
                } finally {
                    loader.style.display = "none";
                }
            }