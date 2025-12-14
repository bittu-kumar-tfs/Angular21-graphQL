# Angular 21 Authentication App

A modern Angular 21 application with authentication features following best practices.

## Features

- ✅ User Registration
- ✅ User Login with JWT authentication
- ✅ Protected Routes (Dashboard & Users)
- ✅ User Listing
- ✅ Logout functionality
- ✅ Bootstrap 5 styling
- ✅ Signals for state management
- ✅ HTTP-only cookie authentication
- ✅ Auth guards for route protection
- ✅ Reactive forms
- ✅ Lazy-loaded routes

## Tech Stack

- **Angular 21** - Latest Angular framework
- **TypeScript** - Type-safe development
- **Bootstrap 5** - Modern UI framework
- **RxJS** - Reactive programming
- **Signals** - Angular's new reactivity primitives

## Architecture & Best Practices

### Component Structure
- **Standalone Components** - No NgModules, using Angular's new standalone API
- **Signal-based State** - Using Angular signals for reactive state management
- **Lazy Loading** - All feature components are lazy-loaded for optimal performance
- **Change Detection** - OnPush strategy for better performance

### Services
- **Auth Service** - Centralized authentication logic with signal-based state
- **HTTP Interceptor** - Automatically includes credentials (cookies) with requests
- **Dependency Injection** - Using `inject()` function instead of constructor injection

### Routing & Guards
- **Auth Guard** - Protects routes requiring authentication
- **Guest Guard** - Prevents authenticated users from accessing login/register
- **Lazy Routes** - All components are lazy-loaded

### Forms
- **Reactive Forms** - Type-safe form handling
- **Validation** - Built-in and custom validators
- **Error Handling** - User-friendly error messages

## Project Structure

```
src/app/
├── core/
│   ├── guards/
│   │   └── auth.guard.ts          # Route guards
│   ├── interceptors/
│   │   └── auth.interceptor.ts    # HTTP interceptor for credentials
│   ├── models/
│   │   └── user.model.ts          # TypeScript interfaces
│   └── services/
│       └── auth.service.ts        # Authentication service
├── features/
│   ├── auth/
│   │   ├── login.component.ts     # Login page
│   │   └── register.component.ts  # Registration page
│   ├── dashboard/
│   │   └── dashboard.component.ts # Protected dashboard
│   └── users/
│       └── users.component.ts     # User listing page
├── app.config.ts                  # App configuration
├── app.routes.ts                  # Route definitions
└── app.ts                         # Root component
```

## API Endpoints

Base URL: `https://node-graph-ql-backend.vercel.app/api`

### Public Routes
- `POST /register` - Register a new user
- `POST /login` - Login with credentials
- `POST /logout` - Logout current user

### Protected Routes (Requires Authentication)
- `GET /dashboard` - Get dashboard data
- `GET /users` - Get all users

## Running the Application

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Open browser:**
   Navigate to the URL shown in terminal (e.g., `http://localhost:4200`)

## Usage Flow

1. **Register a new user:**
   - Navigate to `/register`
   - Fill in name, email, and password
   - Submit form
   - You'll be redirected to login

2. **Login:**
   - Navigate to `/login`
   - Enter email and password
   - Upon success, redirected to dashboard

3. **Access Protected Routes:**
   - Dashboard: `/dashboard`
   - Users List: `/users`

4. **Logout:**
   - Click logout button from dashboard or users page
   - Redirected to login page

## Key Features Explained

### Signal-based State Management
```typescript
private readonly isAuthenticatedSignal = signal<boolean>(false);
readonly isAuthenticated = computed(() => this.isAuthenticatedSignal());
```

### HTTP Interceptor for Credentials
```typescript
const authReq = req.clone({
  withCredentials: true,  // Include cookies
});
```

### Route Guards
```typescript
{
  path: 'dashboard',
  canActivate: [authGuard],  // Protect route
  loadComponent: () => import('./features/dashboard/dashboard.component')
}
```

### Reactive Forms
```typescript
readonly loginForm = this.fb.nonNullable.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
});
```

## Development Notes

- All components use `ChangeDetectionStrategy.OnPush` for performance
- Forms use reactive approach with typed form controls
- Error handling is centralized in the auth service
- Bootstrap is imported globally in `styles.scss`
- No `standalone: true` needed (default in Angular 21+)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes.
