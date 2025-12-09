import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { Camera, MapPin, Tag, Plus, User, X, Check } from 'lucide-react';
import { toast } from 'sonner';

export function CaptureStart() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [category, setCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false);

  const categories = ['Ocean Plastic', 'Ghost Nets', 'Microplastics', 'Metal Debris', 'Rubber'];

  const handleAddPhoto = () => {
    // Simulate adding a photo
    const mockPhotos = [
      'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400&auto=format',
      'https://images.unsplash.com/photo-1618477460930-de1bcd0e46ea?w=400&auto=format',
      'https://images.unsplash.com/photo-1583367862722-b4c6e4c114a2?w=400&auto=format'
    ];
    const newPhoto = mockPhotos[photos.length % mockPhotos.length];
    setPhotos([...photos, newPhoto]);
    toast.success('Photo added successfully');
  };

  const handleRemovePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  const handleContinue = () => {
    if (photos.length === 0) {
      toast.error('Please add at least one photo');
      return;
    }
    if (!title) {
      toast.error('Please enter a title');
      return;
    }
    if (!category) {
      toast.error('Please select a category');
      return;
    }

    // In a real app, we would pass this data
    navigate('/capture-preview');
  };

  return (
    <WireframeLayout title="New Listing" showBottomNav={true}>
      <div className="flex flex-col h-full relative scrollbar-hide pb-20">

        {/* User Profile Header (Mini) */}
        <div className="flex items-center gap-3 px-1 mb-6">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <User className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Fisher Profile</p>
            <p className="text-xs text-muted-foreground">Listing to Marketplace</p>
          </div>
        </div>

        {/* Photos Section */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-white">Photos</label>
            <span className="text-xs text-cyan-400">{photos.length}/10</span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            <button
              onClick={handleAddPhoto}
              className="flex-none w-28 h-28 rounded-xl border border-white/10 bg-card/60 flex flex-col items-center justify-center gap-2 hover:bg-card hover:border-cyan-500/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Camera className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-xs font-medium text-white">Add Photo</span>
            </button>

            {photos.map((photo, index) => (
              <div key={index} className="flex-none w-28 h-28 rounded-xl border border-white/10 bg-black/40 relative overflow-hidden group">
                <img src={photo} alt="Capture" className="w-full h-full object-cover" />
                <button
                  onClick={() => handleRemovePhoto(index)}
                  className="absolute top-1 right-1 p-1 bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}

            {/* Placeholders */}
            {[...Array(Math.max(0, 3 - photos.length))].map((_, i) => (
              <div key={`placeholder-${i}`} className="flex-none w-28 h-28 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center">
                <Plus className="w-6 h-6 text-white/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Listing Details Form */}
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What are you collecting?"
              className="w-full h-12 px-4 rounded-xl bg-card/40 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Estimated Weight</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="0.00 kg"
              className="w-full h-12 px-4 rounded-xl bg-card/40 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
            />
          </div>

          <div className="space-y-2 relative">
            <label className="text-sm font-semibold text-white">Category</label>
            <button
              onClick={() => setShowCategories(!showCategories)}
              className={`w-full h-12 px-4 rounded-xl bg-card/40 border border-white/10 flex items-center justify-between transition-colors ${category ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
            >
              <span className="flex items-center gap-2">
                <Tag className={`w-4 h-4 ${category ? 'text-cyan-400' : ''}`} />
                {category || 'Select Category'}
              </span>
            </button>

            {/* Simple Dropdown */}
            {showCategories && (
              <div className="absolute top-full left-0 w-full mt-2 bg-card border border-white/10 rounded-xl shadow-xl z-20 overflow-hidden">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/5 flex items-center justify-between"
                    onClick={() => {
                      setCategory(cat);
                      setShowCategories(false);
                    }}
                  >
                    {cat}
                    {category === cat && <Check className="w-4 h-4 text-cyan-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Location</label>
            <button className="w-full h-12 px-4 rounded-xl bg-card/40 border border-white/10 flex items-center justify-between text-muted-foreground hover:text-white transition-colors cursor-default">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Pacific Ocean (Detected)
              </span>
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8">
          <WireframeButton
            onClick={handleContinue}
            fullWidth
            className="h-12 text-base font-semibold shadow-lg shadow-cyan-900/20"
          >
            Continue
          </WireframeButton>
        </div>

      </div>
    </WireframeLayout>
  );

}
