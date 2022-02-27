const main = document.querySelector('main')
const tags = document.querySelectorAll('.tags > .tag')
const jobs = document.querySelectorAll('.job')

// Array containing item classes
const itemTags = []
// Array containing filters
const filters = []

var header = document.getElementsByTagName("header")[0];
var avatar = document.getElementsByClassName("fa-circle-user")[0];
var logo = document.getElementsByClassName("Logo-name")[0];
window.addEventListener("scroll", () => {
    if (window?.scrollY > 100) {
        if (header == undefined) return
        else {
            header.classList.add("header-color");
            avatar.classList.add("fa-circle-user-color");
            logo.classList.add("Logo-name-color");
        }
    } else {
        header.classList.remove("header-color");
        avatar.classList.remove("fa-circle-user-color");
        logo.classList.remove("Logo-name-color");
    }
})

tags.forEach((tag) => {
    const tagClass = tag.classList[1]

    tag.addEventListener('click', () => {
        // Make tags function
        makeTag = (div) => {
            filters.push(tagClass)

            const div2 = document.createElement('div')
            div2.classList.add(tagClass)
            div.prepend(div2)

            const pDiv = document.createElement('div')
            pDiv.classList.add('tag')
            div2.append(pDiv)

            const p = document.createElement('p')
            p.innerHTML = tag.children[0].innerHTML
            pDiv.append(p)

            const svgDiv = document.createElement('div')
            svgDiv.classList.add('close')
            div2.append(svgDiv)

            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            svg.setAttribute('width', '14')
            svg.setAttribute('height', '14')
            svgDiv.append(svg)

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
            path.setAttribute('fill', '#FFF')
            path.setAttribute('fill-rule', 'evenodd')
            path.setAttribute('d', 'M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z')
            svg.append(path)

            // Filter function
            filter = (item) => {
                if (filters.every(r => itemTags.includes(r)) == false) {
                    item.classList.add('hide')
                    itemTags.splice(0, 12)
                } else {
                    item.classList.remove('hide')
                    itemTags.splice(0, 12)
                }
            }

            // Hide all jobs that don't fit filters
            jobs.forEach((job) => {
                const tagList = job.querySelectorAll('.tag')
                tagList.forEach(t => {
                    itemTags.push(t.classList[1])
                })

                filter(job)
            })

            // tag-box tag click function
            div2.addEventListener('click', () => {
                div2.remove()

                const tagBox = document.querySelector('.tag-box')
                const index = filters.indexOf(tagClass)
                filters.splice(index, 1)

                jobs.forEach((job) => {
                    const tagList = job.querySelectorAll('.tag')
                    tagList.forEach(t => {
                        itemTags.push(t.classList[1])
                    })

                    filter(job)

                    if (div.children.length == 0) {
                        job.classList.remove('hide')
                        tagBox.remove()
                    }
                })
            })
        }

        // Determines whether to make tag box or not
        if (main.children[0].classList.contains('tag-box') == false) {
            const div = document.createElement('div')
            div.classList.add('tag-box')
            main.prepend(div)

            const allTags = document.createElement('div')
            allTags.classList.add('filters')
            div.append(allTags)

            const clearDiv = document.createElement('div')
            clearDiv.classList.add('clear')
            div.append(clearDiv)

            const clear = document.createElement('p')
            clear.innerHTML = 'Clear'
            clearDiv.append(clear)

            clearDiv.addEventListener('click', () => {
                div.remove()
                filters.splice(0, 12)
                itemTags.splice(0, 12)

                jobs.forEach((job) => {
                    job.classList.remove('hide')
                })
            })

            makeTag(allTags)
        } else {
            const div = document.querySelector('.tag-box > div')

            if (filters.includes(tagClass) == false) {
                makeTag(div)
            }
        }
    })
})