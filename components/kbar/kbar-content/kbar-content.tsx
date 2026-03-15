import { Command } from 'cmdk';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { useCmdk } from '../../../contexts/cmdk-context';
import { useThemeContext } from '../../../hooks/useThemeContext';
import getActions from '../utils/actions';

const KBarContent: FunctionComponent = () => {
  const { open, setOpen } = useCmdk();
  const { theme, isDark, setDarkMode } = useThemeContext();
  const router = useRouter();

  const actions = getActions(setDarkMode, router);
  const sections = Array.from(new Set(actions.map((a) => a.section)));

  const handleSelect = (perform: () => void) => {
    perform();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={() => setOpen(false)}
    >
      <Command
        label="Command Menu"
        className={`max-w-xl w-full rounded-xl overflow-hidden shadow-2xl ${theme.kbarBackground} ${theme.kbarColor}`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (document.activeElement?.tagName === 'INPUT') return;
          const key = e.key.toLowerCase();
          const matched = actions.find((a) => a.shortcut?.some((s) => s.toLowerCase() === key));
          if (matched) {
            e.preventDefault();
            handleSelect(matched.perform);
          }
        }}
      >
        <Command.Input
          autoFocus
          placeholder="Type a command or search…"
          className={`w-full px-5 py-4 text-base outline-none border-none bg-transparent ${theme.kbarColor} placeholder:opacity-40 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}
        />
        <Command.List className="py-2">
          <Command.Empty className="px-4 py-3 text-sm opacity-50">No results found.</Command.Empty>
          {sections.map((section) => (
            <Command.Group
              key={section}
              heading={
                <span className="block px-4 pt-2 pb-1 text-xs uppercase tracking-widest opacity-50">
                  {section}
                </span>
              }
            >
              {actions
                .filter((a) => a.section === section)
                .map((action) => (
                  <Command.Item
                    key={action.id}
                    value={`${action.name} ${action.keywords ?? ''}`}
                    onSelect={() => handleSelect(action.perform)}
                    className={`flex items-center gap-3 px-5 py-3 cursor-pointer text-sm ${isDark ? 'aria-selected:bg-white/10' : 'aria-selected:bg-black/5'}`}
                  >
                    {action.icon && <span className="opacity-70 flex">{action.icon}</span>}
                    <span>{action.name}</span>
                    {action.shortcut && action.shortcut.length > 0 && (
                      <div className="ml-auto flex gap-1">
                        {action.shortcut.map((s) => (
                          <kbd
                            key={s}
                            className={`px-2 py-0.5 text-xs rounded ${isDark ? 'bg-white/10' : 'bg-black/10'}`}
                          >
                            {s}
                          </kbd>
                        ))}
                      </div>
                    )}
                  </Command.Item>
                ))}
            </Command.Group>
          ))}
        </Command.List>
      </Command>
    </div>
  );
};

export default KBarContent;
