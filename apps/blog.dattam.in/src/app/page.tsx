import { Button } from "@dattam/ui/button";
import { Card, CardDescription, CardTitle } from "@dattam/ui/card";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-6">
      <div>
        <h1 className="text-4xl font-bold text-brand-900">blog.dattam.in</h1>
        <p className="mt-2 text-brand-700">
          Blog — built with shared UI from <code>@dattam/ui</code>.
        </p>
      </div>
      <Card>
        <CardTitle>Latest post</CardTitle>
        <CardDescription>
          Shared Card and Button from the workspace UI package.
        </CardDescription>
        <div className="mt-4">
          <Button>Read more</Button>
        </div>
      </Card>
    </main>
  );
}
