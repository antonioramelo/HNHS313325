        fetch('https://script.google.com/macros/s/AKfycbzNZHnTdFZYDuM1ch1VlHJa-cH1H6t_odOaw1Pi41vpEfbxawlyMbYHpyy9TQ4RdZ3d/exec')
            .then(res => res.json())
            .then(data => {
                let tr = data.content.reduce((prev, cur) => {
                    let td = cur.map(e => `<td>${e}</td>`)
                    return prev + `<tr>${td.join("")}</tr>`
                }, "\r")
                document.querySelector("table").innerHTML = tr;
                
            });
