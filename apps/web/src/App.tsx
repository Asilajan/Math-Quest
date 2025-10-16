import { Outlet, Link, useLocation } from 'react-router-dom';
import { LogOut, User, Castle, Swords, BookOpen, Library, ShoppingBag, Coins } from 'lucide-react';
import { useAuth } from './contexts/AuthContext';
import { useCharacter } from './contexts/CharacterContext';

function App() {
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const { character } = useCharacter();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* RPG Header */}
      <header className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-b-2 border-yellow-600/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo RPG */}
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-lg flex items-center justify-center border-2 border-yellow-500">
                  <Castle className="text-yellow-100" size={24} />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent tracking-wide">
                  MATH QUEST
                </h1>
                <p className="text-xs text-slate-400">Aventure Mathématique</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* Navigation RPG */}
              <nav className="flex gap-3">
                <Link
                  to="/"
                  className={`relative group flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === '/'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Castle size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">Taverne</span>
                  {location.pathname === '/' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg animate-pulse" />
                  )}
                </Link>
                <Link
                  to="/session"
                  className={`relative group flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === '/session'
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Swords size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">Quête</span>
                  {location.pathname === '/session' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-lg animate-pulse" />
                  )}
                </Link>
                <Link
                  to="/grimoire"
                  className={`relative group flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === '/grimoire'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <BookOpen size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">Grimoire</span>
                  {location.pathname === '/grimoire' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg animate-pulse" />
                  )}
                </Link>
                <Link
                  to="/library"
                  className={`relative group flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname.startsWith('/library')
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Library size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">
                    Bibliothèque
                  </span>
                  {location.pathname.startsWith('/library') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-lg animate-pulse" />
                  )}
                </Link>
                <Link
                  to="/shop"
                  className={`relative group flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === '/shop'
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg shadow-yellow-500/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <ShoppingBag size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">Boutique</span>
                  {location.pathname === '/shop' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg animate-pulse" />
                  )}
                </Link>
              </nav>

              {/* Coins display */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-lg border-2 border-yellow-600/50">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500 rounded-full blur opacity-40" />
                  <Coins className="relative text-yellow-400" size={20} />
                </div>
                <span className="font-bold text-yellow-100 text-lg">{character.coins}</span>
              </div>

              {/* User section RPG */}
              <div className="flex items-center gap-3 pl-6 border-l-2 border-slate-700">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center border-2 border-purple-400">
                    <User size={14} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">
                    {currentUser?.displayName || currentUser?.email?.split('@')[0]}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3 py-1.5 bg-red-900/30 hover:bg-red-800/50 text-red-300 hover:text-red-200 rounded-lg border border-red-800 hover:border-red-700 transition-all"
                >
                  <LogOut size={14} />
                  <span className="text-xs font-semibold uppercase">Quitter</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
