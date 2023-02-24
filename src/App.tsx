import ThemeToggleButton from './components/button/toggleTheme';
import './App.css';
function App() {
  return (
    <div className="App">
      <ThemeToggleButton
        pos="fixed"
        bottom="2"
        right="2"
        backdropFilter="auto"
        backdropBlur="8px"
      />
    </div>
  );
}

export default App;
