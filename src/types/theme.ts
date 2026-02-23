export interface ThemeClasses {
  wrapper: string;
  button: string;
  buttonSecondary: string;
  input: string;
  card: string;
  badge: string;
  text: string;
  heading: string;
}

export interface ThemeParams {
  radius: string;
  shadow: string;
  border: string;
}

export interface ThemeDefinition {
  id: string;
  label: string;
  description: string;
  icon: string;
  font: string; // The preferred font family variable (e.g., 'var(--font-mono)')
  generate: (params: ThemeParams) => ThemeClasses;
}
