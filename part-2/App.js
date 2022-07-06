const App = () => (
    <div>
        <Tweet username="CowDude" name="John Bumpus" date={Date()} message="Cowabunga"/>
        <Tweet username="CatGrrrrl" name="Caroline Hess" date={Date()} message="OMG Cats"/>
        <Tweet username="ConservativeAunt" name="Karen Dermott" date={Date()} message="Milennials Suck"/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))