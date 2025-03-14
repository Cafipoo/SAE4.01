interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const getPasswordStrength = (password: string) => {
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return {
      score: strength,
      message: strength === 0 ? "Très faible" :
               strength === 1 ? "Faible" :
               strength === 2 ? "Moyen" :
               strength === 3 ? "Fort" :
               strength === 4 ? "Très fort" : "Excellent"
    };
  };

  const strength = getPasswordStrength(password);
  const width = `${(strength.score / 5) * 100}%`;
  
  const getColor = () => {
    switch(strength.score) {
      case 0:
      case 1: return 'bg-red-500';
      case 2: return 'bg-orange-500';
      case 3: return 'bg-yellow-500';
      case 4: return 'bg-green-500';
      case 5: return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="mt-2">
      <div className="h-1 w-full bg-gray-800 rounded-full">
        <div 
          className={`h-1 rounded-full transition-all duration-300 ${getColor()}`}
          style={{ width }}
        />
      </div>
      <p className="text-sm text-gray-400 mt-1">{strength.message}</p>
    </div>
  );
};

export default PasswordStrength; 