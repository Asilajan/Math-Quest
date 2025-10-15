import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Loader2, LogIn, UserPlus } from 'lucide-react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        if (!name.trim()) {
          setError('Veuillez entrer votre nom');
          setLoading(false);
          return;
        }
        await signup(email, password, name);
      }
      navigate('/');
    } catch (err: any) {
      console.error('Auth error:', err);
      
      // Translate Firebase error messages to French
      const errorMessages: { [key: string]: string } = {
        'auth/email-already-in-use': 'Cette adresse email est déjà utilisée',
        'auth/invalid-email': 'Adresse email invalide',
        'auth/operation-not-allowed': 'Opération non autorisée',
        'auth/weak-password': 'Le mot de passe doit contenir au moins 6 caractères',
        'auth/user-disabled': 'Ce compte a été désactivé',
        'auth/user-not-found': 'Aucun compte trouvé avec cette adresse email',
        'auth/wrong-password': 'Mot de passe incorrect',
        'auth/invalid-credential': 'Identifiants invalides',
        'auth/too-many-requests': 'Trop de tentatives. Veuillez réessayer plus tard',
      };

      setError(errorMessages[err.code] || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Math Learning</h1>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{isLogin ? 'Connexion' : 'Créer un compte'}</CardTitle>
            <CardDescription>
              {isLogin
                ? 'Connectez-vous pour accéder à votre tableau de bord'
                : 'Créez un compte pour commencer votre apprentissage'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field (only for signup) */}
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Jean Dupont"
                    required={!isLogin}
                    disabled={loading}
                  />
                </div>
              )}

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="exemple@email.com"
                  required
                  disabled={loading}
                />
              </div>

              {/* Password field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                  minLength={6}
                  disabled={loading}
                />
                {!isLogin && (
                  <p className="mt-1 text-xs text-gray-500">
                    Le mot de passe doit contenir au moins 6 caractères
                  </p>
                )}
              </div>

              {/* Error message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                >
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Chargement...
                  </>
                ) : isLogin ? (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Se connecter
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Créer un compte
                  </>
                )}
              </Button>
            </form>

            {/* Toggle between login/signup */}
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                disabled={loading}
              >
                {isLogin
                  ? "Pas encore de compte ? Créer un compte"
                  : "Déjà un compte ? Se connecter"}
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          En créant un compte, vous acceptez nos conditions d'utilisation
        </p>
      </motion.div>
    </div>
  );
}
