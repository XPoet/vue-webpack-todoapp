import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'itPoet'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Power by {this.author}</span>
            </div>
        )
    }
}