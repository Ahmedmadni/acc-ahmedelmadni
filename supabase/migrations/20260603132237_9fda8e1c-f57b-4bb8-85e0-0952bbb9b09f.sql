-- Grant admin role to the primary user (elmadnim@gmail.com) and auto-grant on future signups with that email.

-- 1) Seed admin role for existing user if present
INSERT INTO public.user_roles (user_id, role)
SELECT u.id, 'admin'::public.app_role
FROM auth.users u
WHERE lower(u.email) = 'elmadnim@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;

-- 2) Trigger function to auto-assign admin on signup for the primary email
CREATE OR REPLACE FUNCTION public.assign_primary_admin()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.email IS NOT NULL AND lower(NEW.email) = 'elmadnim@gmail.com' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin'::public.app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

-- 3) Trigger on auth.users insert
DROP TRIGGER IF EXISTS on_auth_user_created_assign_admin ON auth.users;
CREATE TRIGGER on_auth_user_created_assign_admin
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.assign_primary_admin();