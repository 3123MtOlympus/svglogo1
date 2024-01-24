class shape {
    constructor(shape, color, text, textcolor) {
        this.shape = shape
        this.color = color
        this.text = text
        this.textcolor = textcolor
    }
    
}
class circle { 
    constructor(shape, color, text, textcolor) {
        this.shape = shape
        this.color = color
        this.text = text
        this.textcolor = textcolor
    }
    render() {
        return `<html>
        <body>
        
        <svg width="200" height="300">
          <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="${this.color}" />
          <text x="39" y="54" fill="${this.textcolor}">${this.text}</text>
        </svg>
        
        </body>
        </html>`
    }
}
class square {
    constructor(shape, color, text, textcolor) {
        this.shape = shape
        this.color = color
        this.text = text
        this.textcolor = textcolor
    }
    render() {
       return `<html>
        <body>
        <svg width="200" height="300">
  <rect width="200" height="200" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)" />
  <text x="87" y="100" fill="${this.textcolor}">${this.text}</text>
</svg>

</body>
</html>`
    }
}

class triangle {
    constructor(shape, color, text, textcolor) {
        this.shape = shape
        this.color = color
        this.text = text
        this.textcolor = textcolor
    }
    render() {
       return `<html>
    <body>
    <svg height="300" width="200">
  <polygon points="100,10 150,190 80,210" style="fill:${this.color};stroke:purple;stroke-width:1" />
  <text x="100" y="150" fill="${this.textcolor}">${this.text}</text><text>
</svg>
</body>
</html>`
    }
}
module.exports={
    circle, square, triangle
}