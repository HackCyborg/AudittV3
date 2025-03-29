import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Auditors from "@/pages/auditors";
import Business from "@/pages/business";
import BugBounty from "@/pages/bug-bounty";
import BugBountySignup from "@/pages/bug-bounty/signup";
import AuditorSignup from "@/pages/auditors/signup";
import AuditMarketplace from "@/pages/audit-marketplace";
import VerifiedAuditors from "@/pages/verified-auditors";
import Contributors from "@/pages/contributors";
import Compliance from "@/pages/compliance";
import Community from "@/pages/community";
import ProgressTrackers from "@/pages/progress-trackers";
import PostProjectNew from "@/pages/post-project-new";
import AgenticAudit from "@/pages/agentic-audit";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-dark-600 bg-light-500 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/auditors" component={Auditors} />
          <Route path="/business" component={Business} />
          <Route path="/bug-bounty" component={BugBounty} />
          <Route path="/bug-bounty/signup" component={BugBountySignup} />
          <Route path="/auditors/signup" component={AuditorSignup} />
          <Route path="/audit-marketplace" component={AuditMarketplace} />
          <Route path="/verified-auditors" component={VerifiedAuditors} />
          <Route path="/contributors" component={Contributors} />
          <Route path="/compliance" component={Compliance} />
          <Route path="/community" component={Community} />
          <Route path="/progress-trackers" component={ProgressTrackers} />
          <Route path="/post-project" component={PostProjectNew} />
          <Route path="/agentic-audit" component={AgenticAudit} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;