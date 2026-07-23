import { useState } from 'react';
import Card from '../components/Card';

export default function SettingsPage() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [autoUpdate, setAutoUpdate] = useState(true);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account and application preferences.</p>
      </div>

      <div style={{ maxWidth: 720 }}>
        <Card title="Notifications" subtitle="Choose what you want to be notified about.">
          <div className="settings-section">
            <div className="settings-row">
              <div>
                <div className="settings-row-label">Email notifications</div>
                <div className="settings-row-desc">Receive emails about activity in your workspace.</div>
              </div>
              <div className={`toggle ${emailNotif ? 'on' : ''}`} onClick={() => setEmailNotif(!emailNotif)} />
            </div>
            <div className="settings-row">
              <div>
                <div className="settings-row-label">Push notifications</div>
                <div className="settings-row-desc">Get real-time alerts in your browser.</div>
              </div>
              <div className={`toggle ${pushNotif ? 'on' : ''}`} onClick={() => setPushNotif(!pushNotif)} />
            </div>
            <div className="settings-row">
              <div>
                <div className="settings-row-label">Weekly report</div>
                <div className="settings-row-desc">A summary of your dashboard every Monday.</div>
              </div>
              <div className={`toggle ${weeklyReport ? 'on' : ''}`} onClick={() => setWeeklyReport(!weeklyReport)} />
            </div>
          </div>
        </Card>

        <div style={{ height: 20 }} />

        <Card title="Security" subtitle="Keep your account safe and secure.">
          <div className="settings-section">
            <div className="settings-row">
              <div>
                <div className="settings-row-label">Two-factor authentication</div>
                <div className="settings-row-desc">Require a code at sign-in for extra security.</div>
              </div>
              <div className={`toggle ${twoFactor ? 'on' : ''}`} onClick={() => setTwoFactor(!twoFactor)} />
            </div>
            <div className="settings-row">
              <div>
                <div className="settings-row-label">Auto-update dashboard</div>
                <div className="settings-row-desc">Refresh dashboard data automatically every 60 seconds.</div>
              </div>
              <div className={`toggle ${autoUpdate ? 'on' : ''}`} onClick={() => setAutoUpdate(!autoUpdate)} />
            </div>
          </div>
        </Card>

        <div style={{ height: 20 }} />

        <Card title="Profile" subtitle="Update your personal information.">
          <div className="settings-section">
            <div className="form-group">
              <label className="form-label">Full name</label>
              <input className="form-input" defaultValue="Sarah Chen" />
            </div>
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input className="form-input" defaultValue="sarah.chen@example.com" />
            </div>
            <button className="btn btn-primary" style={{ marginTop: 8 }}>Save changes</button>
          </div>
        </Card>
      </div>
    </div>
  );
}
