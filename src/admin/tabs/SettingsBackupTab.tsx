import React, { useState } from 'react';
import {
  ShieldCheck,
  KeyRound,
  Download,
  Upload,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Lock,
  User,
  Database,
  FileJson,
  Layers
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';
import { useAdminAuth } from '../../context/AdminAuthContext';

export const SettingsBackupTab: React.FC = () => {
  const { exportBackup, importBackup, resetToDefaults, lastUpdated, galleryItems, events, branches, notices } = useWebsiteData();
  const { updateCredentials, resetDefaultCredentials, currentUser } = useAdminAuth();

  // Credentials form
  const [newUsername, setNewUsername] = useState(currentUser?.username || 'admin');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [credMessage, setCredMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Restore state
  const [importMessage, setImportMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCredMessage(null);

    if (newPassword !== confirmPassword) {
      setCredMessage({ type: 'error', text: 'New password and confirmation do not match.' });
      return;
    }

    const res = updateCredentials(newUsername, newPassword, oldPassword);
    if (res.success) {
      setCredMessage({ type: 'success', text: 'Admin credentials updated successfully!' });
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setCredMessage({ type: 'error', text: res.error || 'Failed to update credentials.' });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) {
          const res = importBackup(content);
          if (res.success) {
            setImportMessage({ type: 'success', text: 'Backup restored successfully! All data updated.' });
          } else {
            setImportMessage({ type: 'error', text: res.error || 'Could not parse JSON backup.' });
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
            <span>Security & System Maintenance</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Settings, Security & Backups
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Download full site backups, restore data, and modify your administrator login credentials.
          </p>
        </div>
      </div>

      {/* Backup & Restore Panel */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-5">
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-3">
          <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-base text-slate-900">
              Complete Website Backup & Restore
            </h3>
            <p className="text-xs text-slate-500">
              Export all gallery photos, videos, events, and notices to a standalone JSON file.
            </p>
          </div>
        </div>

        {importMessage && (
          <div className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
            importMessage.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {importMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertTriangle className="w-4 h-4 text-red-600" />}
            <span>{importMessage.text}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Download Backup */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                <Download className="w-4 h-4 text-purple-600" />
                <span>Export JSON Backup</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Save a snapshot containing all {galleryItems.length} media items, {notices.length} notices, {events.length} events, and {branches.length} branches.
              </p>
            </div>

            <button
              onClick={exportBackup}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-purple-600 hover:bg-purple-700 shadow-sm transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Backup File (.json)</span>
            </button>
          </div>

          {/* Import / Restore */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                <Upload className="w-4 h-4 text-purple-600" />
                <span>Restore from JSON Backup</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Select a previously downloaded backup JSON file to restore all website content instantly.
              </p>
            </div>

            <label className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-purple-900 bg-purple-100 hover:bg-purple-200 border border-purple-300 shadow-sm transition-colors flex items-center justify-center space-x-2 cursor-pointer text-center">
              <Upload className="w-4 h-4 text-purple-700" />
              <span>Select Backup File to Restore</span>
              <input
                type="file"
                accept=".json,application/json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

        </div>

        {/* Factory Reset */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <h4 className="font-bold text-slate-800">
              Restore Original Ashram Defaults
            </h4>
            <p className="text-[11px] text-slate-500">
              Reverts all website content to the initial master dataset.
            </p>
          </div>

          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 rounded-xl text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 font-bold text-xs border border-red-200 transition-colors shrink-0 flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Default Content</span>
          </button>
        </div>
      </div>

      {/* Admin Credentials Panel */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-5">
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-3">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-base text-slate-900">
              Change Administrator Credentials
            </h3>
            <p className="text-xs text-slate-500">
              Update the security username and password required to access this admin panel.
            </p>
          </div>
        </div>

        {credMessage && (
          <div className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
            credMessage.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {credMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertTriangle className="w-4 h-4 text-red-600" />}
            <span>{credMessage.text}</span>
          </div>
        )}

        <form onSubmit={handleCredentialsSubmit} className="space-y-4 text-xs max-w-md">
          <div className="space-y-1">
            <label className="font-bold text-slate-700">Admin Username</label>
            <input
              type="text"
              required
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Current Security Password</label>
            <input
              type="password"
              required
              placeholder="Enter current password (default: ashram@123)"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">New Password</label>
              <input
                type="password"
                required
                placeholder="At least 6 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Confirm New Password</label>
              <input
                type="password"
                required
                placeholder="Repeat new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                resetDefaultCredentials();
                setCredMessage({ type: 'success', text: 'Credentials reset to default: admin / ashram@123' });
                setNewUsername('admin');
              }}
              className="text-[11px] text-amber-700 hover:underline"
            >
              Reset to default (admin / ashram@123)
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-amber-600 hover:bg-amber-700 shadow-md transition-colors"
            >
              Save New Password
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-base text-slate-900">
                Reset All Website Data?
              </h3>
              <p className="text-xs text-slate-500">
                This will revert all gallery photos, videos, events, notices, and branches back to original defaults.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetToDefaults();
                  setShowResetConfirm(false);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-md"
              >
                Yes, Reset All
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
