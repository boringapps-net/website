import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  RefreshCw, 
  ChevronRight, 
  Terminal, 
  Trash2, 
  File, 
  Eye, 
  Layers, 
  CheckCircle2, 
  ShieldAlert, 
  Clipboard, 
  Lock, 
  Coins, 
  Link2, 
  BookOpen, 
  Sparkles,
  ArrowRight,
  Database,
  Filter,
  Sliders,
  Play
} from 'lucide-react';

interface InteractiveMockupProps {
  type: 'renamer' | 'compressor' | 'csv' | 'clipboard' | 'cron' | 'integrity';
  accentColor: string;
}

export function InteractiveMockup({ type, accentColor }: InteractiveMockupProps) {
  return (
    <div className="w-full bg-white border-4 border-[#1A1A1A] rounded-none overflow-hidden shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] relative">
      {/* OS Titlebar */}
      <div className="bg-[#1A1A1A] border-b-2 border-[#1A1A1A] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-lime-400" />
          <span className="text-xs text-white font-mono ml-2 font-bold select-none uppercase tracking-wide">
            {type === 'renamer' && 'bulksmith --engine-v2.4'}
            {type === 'compressor' && 'ShrinkPress Offline Asset Quantizer'}
            {type === 'csv' && 'CSV-Slicer [Query & Stream]'}
            {type === 'clipboard' && 'ClipboardClean background_scrubber.elf'}
            {type === 'cron' && 'CronKeep visual_daemon.plist'}
            {type === 'integrity' && 'HashSeal Cryptographic Verifier'}
          </span>
         </div>
         <div className="flex items-center gap-1.5 text-[10px] text-white font-mono font-bold">
           <span className="px-1.5 py-0.5 bg-white text-[#1A1A1A] border border-[#1A1A1A]">C:\\NATIVE_ENGINE</span>
         </div>
      </div>

      {/* Simulator Content Area */}
      <div className="p-6 text-[#1A1A1A] font-sans min-h-[360px] flex flex-col justify-between bg-white">
        {type === 'renamer' && <RenamerSimulator accentColor={accentColor} />}
        {type === 'compressor' && <CompressorSimulator accentColor={accentColor} />}
        {type === 'csv' && <CSVSimulator accentColor={accentColor} />}
        {type === 'clipboard' && <ClipboardSimulator accentColor={accentColor} />}
        {type === 'cron' && <CronSimulator accentColor={accentColor} />}
        {type === 'integrity' && <IntegritySimulator accentColor={accentColor} />}
      </div>
    </div>
  );
}

/* ==========================================
   1. BULKSMITH RENAMER SIMULATOR
   ========================================== */
function RenamerSimulator({ accentColor }: { accentColor: string }) {
  const [prefix, setPrefix] = useState('PROJ_2026_');
  const [suffix, setSuffix] = useState('_FINAL');
  const [lowercase, setLowercase] = useState(false);
  const [replaceSpaces, setReplaceSpaces] = useState(true);

  const testFiles = [
    'Raw Footage DSC_0042.mov',
    'Audio Vocal Track 09.wav',
    'Strategy Board Mockup v2.png'
  ];

  const getRenamedFile = (originalName: string, index: number) => {
    let name = originalName;
    const dotIndex = name.lastIndexOf('.');
    let base = name.substring(0, dotIndex);
    const ext = name.substring(dotIndex);

    if (lowercase) {
      base = base.toLowerCase();
    }
    if (replaceSpaces) {
      base = base.replace(/\s+/g, '_');
    }

    return `${prefix}${base}${suffix}_${100 + index + 1}${ext}`;
  };

  return (
    <div className="space-y-4 flex-1 flex flex-col justify-between h-full">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-1">Prefix Rule</label>
            <input 
              type="text" 
              value={prefix} 
              onChange={(e) => setPrefix(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100 font-mono focus:border-amber-500/50 focus:outline-none"
              placeholder="e.g. IMG_"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-1">Suffix Rule</label>
            <input 
              type="text" 
              value={suffix} 
              onChange={(e) => setSuffix(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100 font-mono focus:border-amber-500/50 focus:outline-none"
              placeholder="e.g. _v1"
            />
          </div>
        </div>

        <div className="flex gap-4 p-2 bg-slate-950/60 rounded border border-slate-900">
          <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
            <input 
              type="checkbox" 
              checked={lowercase} 
              onChange={(e) => setLowercase(e.target.checked)}
              className="rounded bg-slate-900 border-slate-800 text-amber-500 focus:ring-0 cursor-pointer"
            />
            <span className="font-mono text-[11px]">Force Lowercase</span>
          </label>
          <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
            <input 
              type="checkbox" 
              checked={replaceSpaces} 
              onChange={(e) => setReplaceSpaces(e.target.checked)}
              className="rounded bg-slate-900 border-slate-800 text-amber-500 focus:ring-0 cursor-pointer"
            />
            <span className="font-mono text-[11px]">Convert Spaces ( _ )</span>
          </label>
        </div>
      </div>

      <div className="flex-1 mt-4">
        <div className="text-[10px] uppercase font-mono text-slate-500 mb-1.5 tracking-wider">Live Execution Matrix</div>
        <div className="space-y-2.5">
          {testFiles.map((file, i) => (
            <div key={file} className="bg-slate-950/40 border border-slate-900/60 rounded p-2 flex flex-col md:flex-row md:items-center justify-between gap-1.5 hover:border-slate-800 transition">
              <div className="flex items-center gap-2 min-w-0">
                <File className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="text-[11px] font-mono text-slate-400 truncate">{file}</span>
              </div>
              <div className="hidden md:block text-slate-600 font-mono text-xs">→</div>
              <div className="flex items-center gap-1.5 min-w-0">
                <span className={`text-[11px] font-mono font-medium truncate ${accentColor}`}>{getRenamedFile(file, i)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>Files in Queue: 3</span>
        <span className="text-emerald-500 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Ready to Run Locally
        </span>
      </div>
    </div>
  );
}

/* ==========================================
   2. SHRINKPRESS COMPRESSOR SIMULATOR
   ========================================== */
function CompressorSimulator({ accentColor }: { accentColor: string }) {
  const [selectedFile, setSelectedFile] = useState<{name: string, original: string, size: number} | null>({
    name: 'Investor_Deck_Master_Q1.pdf',
    original: '12.4 MB',
    size: 12400000
  });
  const [compressionStatus, setCompressionStatus] = useState<'idle' | 'compressing' | 'done'>('idle');
  const [progress, setProgress] = useState(0);

  const items = [
    { name: 'Investor_Deck_Master_Q1.pdf', original: '12.4 MB', size: 12400000 },
    { name: 'App_Store_Hero_Artwork.png', original: '18.9 MB', size: 18900000 },
    { name: 'Client_Audit_Report.pdf', original: '6.2 MB', size: 6200000 }
  ];

  const handleCompress = () => {
    if (!selectedFile || compressionStatus !== 'idle') return;
    setCompressionStatus('compressing');
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setCompressionStatus('done');
          return 100;
        }
        return prev + 8;
      });
    }, 100);
  };

  const handleReset = () => {
    setCompressionStatus('idle');
    setProgress(0);
  };

  const getCompressedSize = (origSize: number) => {
    return (origSize * 0.16 / 1000000).toFixed(2) + ' MB';
  };

  return (
    <div className="space-y-4 flex-1 flex flex-col justify-between h-full">
      <div className="space-y-2">
        <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Select Mock File to Drop</div>
        <div className="grid grid-cols-3 gap-2">
          {items.map((it) => (
            <button
              key={it.name}
              disabled={compressionStatus === 'compressing'}
              onClick={() => { setSelectedFile(it); handleReset(); }}
              className={`p-2 rounded text-left border transition ${
                selectedFile?.name === it.name 
                  ? 'bg-slate-900 border-teal-500/50 text-slate-100' 
                  : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:border-slate-800'
              }`}
            >
              <div className="text-[10px] font-mono leading-none truncate md:max-w-[150px]">{it.name}</div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">{it.original}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center py-4">
        {compressionStatus === 'idle' && (
          <div className="text-center p-6 bg-slate-950/50 border border-dashed border-slate-800 rounded-xl w-full max-w-sm">
            <Layers className="w-8 h-8 text-teal-500 mx-auto mb-2 opacity-80" />
            <div className="text-xs font-mono text-slate-300">Drag files here or press button</div>
            <button 
              onClick={handleCompress}
              className="mt-3 text-[11px] font-mono bg-teal-500 text-slate-950 px-4 py-1.5 rounded-lg font-bold hover:bg-teal-400 hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer"
            >
              Run Safe Compress
            </button>
          </div>
        )}

        {compressionStatus === 'compressing' && (
          <div className="w-full max-w-sm space-y-3">
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-teal-400" />
                Quantizing image layers...
              </span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-slate-900 h-2 rounded overflow-hidden">
              <div 
                className="bg-teal-500 h-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-500 text-center font-mono">Quantization levels set mathematically. 0 bytes exported over cloud.</div>
          </div>
        )}

        {compressionStatus === 'done' && selectedFile && (
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4 w-full max-w-sm relative overflow-hidden">
            <div className="flex gap-3 items-start">
              <div className="bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-emerald-400 font-mono">100% Offline Quantized</h4>
                <p className="text-[11px] text-slate-400 font-mono mt-1 truncate max-w-[220px]">
                  {selectedFile.name}
                </p>
                <div className="flex items-center gap-2 mt-2 font-mono text-[11px]">
                  <span className="text-slate-500 line-through">{selectedFile.original}</span>
                  <span className="text-slate-500">→</span>
                  <span className="text-emerald-400 font-bold">{getCompressedSize(selectedFile.size)}</span>
                  <span className="bg-emerald-500/10 text-emerald-400 px-1 rounded text-[9px] border border-emerald-500/20">Saved 84%</span>
                </div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 mt-2.5 pt-2.5 border-t border-slate-900 flex justify-between">
              <span>Security Hash: SHA-256 Verified</span>
              <button onClick={handleReset} className="text-slate-400 underline hover:text-white">Reset Canvas</button>
            </div>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>Processing Engine: Local v1.8</span>
        <span className="text-slate-400 flex items-center gap-1">
          <Lock className="w-3 h-3" /> No Cloud Transmissions
        </span>
      </div>
    </div>
  );
}

/* ==========================================
   3. CSV-SLICER SPREADSHEET SIMULATOR
   ========================================== */
function CSVSimulator({ accentColor }: { accentColor: string }) {
  const [filterQuery, setFilterQuery] = useState<'all' | 'au' | 'us' | 'enterprise'>('all');
  const [loading, setLoading] = useState(false);

  const mockDatabase = [
    { id: 101, company: 'The IT Dept Pty Ltd', abn: '12 665 405 505', country: 'AU', activeLicenses: 4, tier: 'Enterprise' },
    { id: 102, company: 'CURIOLA PTY LTD', abn: '85 683 066 748', country: 'AU', activeLicenses: 2, tier: 'Standard' },
    { id: 103, company: 'Alpha Inc.', abn: 'N/A', country: 'US', activeLicenses: 12, tier: 'Enterprise' },
    { id: 104, company: 'Beta Global Pty Ltd', abn: '33 441 293 112', country: 'AU', activeLicenses: 6, tier: 'Enterprise' },
    { id: 105, company: 'SupaTech LLC', abn: 'N/A', country: 'US', activeLicenses: 1, tier: 'Standard' }
  ];

  const filteredData = mockDatabase.filter((row) => {
    if (filterQuery === 'au') return row.country === 'AU';
    if (filterQuery === 'us') return row.country === 'US';
    if (filterQuery === 'enterprise') return row.tier === 'Enterprise';
    return true;
  });

  const changeFilter = (newFilter: 'all' | 'au' | 'us' | 'enterprise') => {
    setLoading(true);
    setFilterQuery(newFilter);
    setTimeout(() => {
      setLoading(false);
    }, 150);
  };

  return (
    <div className="space-y-4 flex-1 flex flex-col justify-between h-full">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Memory Matrix Filters</div>
          <div className="text-[10px] font-mono text-slate-500 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-900">
            Source: 4.2 GB CSV Buffer
          </div>
        </div>

        <div className="flex gap-1.5 p-1 bg-slate-950/80 rounded border border-slate-900 text-[10px] font-mono">
          <button 
            onClick={() => changeFilter('all')}
            className={`flex-1 py-1 rounded transition ${filterQuery === 'all' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            All Rows ({mockDatabase.length})
          </button>
          <button 
            onClick={() => changeFilter('au')}
            className={`flex-1 py-1 rounded transition ${filterQuery === 'au' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            Country IS 'AU'
          </button>
          <button 
            onClick={() => changeFilter('us')}
            className={`flex-1 py-1 rounded transition ${filterQuery === 'us' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            Country IS 'US'
          </button>
          <button 
            onClick={() => changeFilter('enterprise')}
            className={`flex-1 py-1 rounded transition ${filterQuery === 'enterprise' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            Tier IS 'Enterprise'
          </button>
        </div>
      </div>

      <div className="flex-1 mt-3 bg-slate-950 p-2.5 rounded border border-slate-900 min-h-[160px] flex flex-col justify-between">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-900 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                <th className="pb-1.5 font-bold">UID</th>
                <th className="pb-1.5 font-bold">Company</th>
                <th className="pb-1.5 font-bold">ABN</th>
                <th className="pb-1.5 font-bold text-center">Country</th>
                <th className="pb-1.5 font-bold text-right">Licenses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900/40 text-[11px] font-mono">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-500">
                    <RefreshCw className="w-4 h-4 animate-spin text-sky-400 mx-auto mb-1.5" />
                    Querying index vectors... (0.02ms)
                  </td>
                </tr>
              ) : (
                filteredData.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-900/40">
                    <td className="py-1.5 text-slate-500">#{row.id}</td>
                    <td className="py-1.5 text-slate-200 truncate max-w-[120px]">{row.company}</td>
                    <td className="py-1.5 text-slate-400">{row.abn}</td>
                    <td className="py-1.5 text-center text-slate-300">
                      <span className="px-1 py-0.5 rounded bg-slate-900 text-[9px] border border-slate-800">{row.country}</span>
                    </td>
                    <td className="py-1.5 text-right font-medium text-sky-400">{row.activeLicenses}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {!loading && (
          <div className="text-[10px] font-mono text-slate-500 text-right pt-2.5 border-t border-slate-900">
            Rendered {filteredData.length} records instantly in <span className="text-emerald-500">0.03 ms</span>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>RAM Buffer Allocation: 0.00%</span>
        <span className="text-sky-400 flex items-center gap-1">
          <Database className="w-3.5 h-3.5" /> Mmap Streams Online
        </span>
      </div>
    </div>
  );
}

/* ==========================================
   4. CLIPBOARDCLEAN DETRACKING SIMULATOR
   ========================================== */
function ClipboardSimulator({ accentColor }: { accentColor: string }) {
  const dirtyUrl = 'https://example.com/checkout?item=premium_v2&utm_source=social_ad&utm_medium=twitter_feed&utm_campaign=winter_launch&fbclid=x198239y2398h_g6&gclid=AIzaSyA8';
  const cleanUrl = 'https://example.com/checkout?item=premium_v2';

  const [inputVal, setInputVal] = useState(dirtyUrl);
  const [outputVal, setOutputVal] = useState('');
  const [isScrubbed, setIsScrubbed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleScrub = () => {
    try {
      const url = new URL(inputVal);
      const params = new URLSearchParams(url.search);
      
      // Tracking parameters to scrub
      const badParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid', 'msclkid', 'twclid', 'affiliate_id'];
      
      badParams.forEach(p => params.delete(p));
      
      // Reconstitute URL
      const search = params.toString();
      const finalUrl = `${url.origin}${url.pathname}${search ? '?' + search : ''}`;
      
      setOutputVal(finalUrl);
      setIsScrubbed(true);
    } catch {
      // Simple custom fallback
      setOutputVal(inputVal.split('&utm_')[0].split('?utm_')[0]);
      setIsScrubbed(true);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputVal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLoadPreserve = () => {
    setInputVal(dirtyUrl);
    setIsScrubbed(false);
    setOutputVal('');
  };

  return (
    <div className="space-y-4 flex-1 flex flex-col justify-between h-full">
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-wider text-slate-400">
          <span>Captured Clipboard Feed</span>
          <button 
            disabled={inputVal === dirtyUrl && !isScrubbed}
            onClick={handleLoadPreserve}
            className="text-fuchsia-400 underline hover:text-fuchsia-300"
          >
            Load Messy URL
          </button>
        </div>
        <textarea 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-[11px] font-mono text-slate-300 focus:border-fuchsia-500/50 focus:outline-none min-h-[55px] resize-none"
          placeholder="Paste trailing link..."
        />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center py-2">
        {!isScrubbed ? (
          <button
            onClick={handleScrub}
            className="flex items-center gap-2 bg-fuchsia-500 text-slate-950 font-bold font-mono px-5 py-2 rounded-lg text-xs hover:bg-fuchsia-400 hover:scale-105 transition active:scale-95 cursor-pointer"
          >
            <Link2 className="w-4 h-4" /> Run Privacy Scrub
          </button>
        ) : (
          <div className="w-full bg-slate-950 p-3 rounded-lg border border-fuchsia-500/20 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> UTMs & Tracker Tokens Purged!
              </span>
              <button 
                onClick={handleCopy}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="text-[11px] font-mono text-slate-200 select-all p-1.5 bg-slate-900/60 rounded break-all">
              {outputVal}
            </div>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>Sanitation Engine: DryScrub v4.0</span>
        <span className="text-fuchsia-400 flex items-center gap-1 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Running local tray daemon
        </span>
      </div>
    </div>
  );
}

/* ==========================================
   5. CRONKEEP CRONTAB SCHEDULER SIMULATOR
   ========================================== */
function CronSimulator({ accentColor }: { accentColor: string }) {
  const [cronExpression, setCronExpression] = useState('*/15 * * * *');
  const [simulationLogs, setSimulationLogs] = useState<string[]>([
    '[05:45:00] task check --all: execution complete (exit=0)',
    '[05:30:00] task check --all: execution complete (exit=0)',
    '[05:15:00] task check --all: execution complete (exit=0)'
  ]);

  const presets = [
    { label: 'Every 15 min', expr: '*/15 * * * *', desc: 'Runs every 15 minutes, every hour, every single day.' },
    { label: 'Hourly', expr: '0 * * * *', desc: 'Runs exactly at minute 0 of every hour, every single day.' },
    { label: 'Daily at 4 AM', expr: '0 4 * * *', desc: 'Runs at precisely 04:00 AM once every single day.' },
    { label: 'Weekly backup', expr: '0 0 * * 0', desc: 'Runs at midnight every Sunday morning.' }
  ];

  const handleSimulateTrigger = () => {
    const time = new Date().toLocaleTimeString();
    setSimulationLogs((prev) => [
      `[${time}] user manual trigger: spawned foreground script`,
      ...prev.slice(0, 3)
    ]);
  };

  const getHumanDescription = (expr: string) => {
    const presetMatch = presets.find(p => p.expr === expr);
    if (presetMatch) return presetMatch.desc;
    return 'Custom daemon schedule: active cron simulation loaded.';
  };

  return (
    <div className="space-y-4 flex-1 flex flex-col justify-between h-full">
      <div className="space-y-3">
        <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Task Scheduler Preset</div>
        <div className="grid grid-cols-4 gap-1.5 font-mono text-[10px]">
          {presets.map((p) => (
            <button
              key={p.expr}
              onClick={() => setCronExpression(p.expr)}
              className={`py-1.5 rounded border transition px-1 ${
                cronExpression === p.expr 
                  ? 'bg-violet-950/80 border-violet-500/50 text-slate-100' 
                  : 'bg-slate-950/40 border-slate-900 text-slate-500 hover:border-slate-800'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 mt-3 bg-slate-950 p-3 rounded-lg border border-slate-900 space-y-2.5">
        <div className="flex justify-between items-center bg-slate-900/40 px-2 py-1.5 rounded border border-slate-900/60">
          <div className="flex items-center gap-2">
            <span className="text-violet-400 font-mono text-xs font-bold font-mono">{cronExpression}</span>
          </div>
          <button 
            onClick={handleSimulateTrigger}
            className="text-[9px] uppercase tracking-wider font-mono font-bold bg-violet-600 px-2.5 py-1 rounded text-white hover:bg-violet-500 transition cursor-pointer"
          >
            Force Run Now
          </button>
        </div>
        <p className="text-[11px] font-mono text-slate-400 italic">
          "{getHumanDescription(cronExpression)}"
        </p>

        <div className="space-y-1 mt-3">
          <div className="text-[9px] font-mono text-slate-600 uppercase">Interactive daemon log buffer</div>
          {simulationLogs.map((log, i) => (
            <div key={i} className="font-mono text-[10px] text-slate-500 truncate">
              {log}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>Active Daemons registered: 1</span>
        <span className="text-violet-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /> Watcher Loop Active
        </span>
      </div>
    </div>
  );
}

/* ==========================================
   6. HASHSEAL FILE INTEGRITY SIMULATOR
   ========================================== */
function IntegritySimulator({ accentColor }: { accentColor: string }) {
  const [inputText, setInputText] = useState('BoringApps Secure Audit Code ABN_12665405505');
  const [algo, setAlgo] = useState<'md5' | 'sha256' | 'sha512'>('sha256');

  // Extremely basic visual checksum simulator just for demonstration representation
  const getSimulatedHash = (text: string, selectedAlgo: string) => {
    if (!text) return '00000000000000000000000000000000';
    
    // Quick pseudo hashing function for clean UI purposes
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = (hash << 5) - hash + text.charCodeAt(i);
      hash |= 0;
    }
    
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    
    if (selectedAlgo === 'md5') {
      return (hex + hex + hex + hex).substring(0, 32);
    } else if (selectedAlgo === 'sha256') {
      return (hex + '8f9cde2a3b4f10738d8e5f2a1a0b3c4d' + hex + 'f9c8da').substring(0, 64);
    } else {
      return (hex + 'bf9cde2a3b4f10738d8e5f2a1a0b3c4d' + hex + 'fb9cde2a3b4f10738d8e5f2a24fa6ba' + hex).substring(0, 128);
    }
  };

  const handleClear = () => {
    setInputText('');
  };

  return (
    <div className="space-y-4 flex-1 flex flex-col justify-between h-full">
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-wider text-slate-400">
          <span>Enter Input Text / Metadata</span>
          <button onClick={handleClear} className="text-slate-500 hover:text-slate-300">Clear</button>
        </div>
        <input 
          type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}
          className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100 font-mono focus:border-blue-500/50 focus:outline-none"
          placeholder="Type letters, numbers or parameters..."
        />
      </div>

      <div className="flex gap-1.5 p-1 bg-slate-950/80 rounded border border-slate-910 font-mono text-[10px]">
        {(['md5', 'sha256', 'sha512'] as const).map((method) => (
          <button
            key={method}
            onClick={() => setAlgo(method)}
            className={`flex-1 py-1 rounded uppercase font-bold transition ${
              algo === method ? 'bg-blue-500 text-slate-950' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {method}
          </button>
        ))}
      </div>

      <div className="flex-1 mt-2 space-y-1.5">
        <span className="text-[10px] uppercase tracking-wider font-mono text-slate-500">Cryptographic Digest</span>
        <div className="bg-slate-950 p-3 rounded border border-slate-900/80 font-mono text-[11px] text-blue-400 break-all select-all leading-relaxed bg-slate-950/60">
          {getSimulatedHash(inputText, algo)}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>Hardware Engine: Silicon v1.0</span>
        <span className="text-blue-400 flex items-center gap-1 font-mono">
          <CheckCircle2 className="w-3.5 h-3.5" /> MD5 & SHA Matcher Ready
        </span>
      </div>
    </div>
  );
}
