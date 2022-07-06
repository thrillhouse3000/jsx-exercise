const App = () => (
    <div>
        <Person name="Kinsington" age={13} hobbies={['kippers', 'fencing', 'money']} />
        <Person name="Joe" age={33} hobbies={['coffee', 'tacos', 'ping pong']} />
        <Person name="Carloine" age={18} hobbies={['tea', 'gardening', 'wizards']} />
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))