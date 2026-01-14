import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card/50 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
          © 2025. Built with{' '}
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{' '}
          using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
